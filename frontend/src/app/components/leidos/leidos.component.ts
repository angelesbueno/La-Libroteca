import { Component, OnInit, TemplateRef } from "@angular/core";
import { ItemService } from "./../../services/item.service";
import { Router } from "@angular/router";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Component({
    selector: "app-leidos",
    templateUrl: "./leidos.component.html",
    styleUrls: ["./leidos.component.scss"]
})
export class LeidosComponent implements OnInit {

    constructor(private item: ItemService, private router: Router, private modalService: BsModalService) {}

    public visible = false;
    public ids: any[] = [];
    public noLeidos = false;
    public respuesta = false;
    public borrado = false;
    public allReadedBooks: any[] = [];
    public allFavsBooks: any[] = [];
    public p: number = 1;

    modalRef: BsModalRef;

    ngOnInit() {
        // COMPRUEBO TOKEN CORRECTO
        this.item
            .postCheckToken()
            .subscribe(res => {
                if (!res) {
                    this.item.setActivate(false);
                    this.item.logout();
                } else {
                    this.visible = true;
                }
            });

        // ME TRAIGO TODOS LOS LIBROS QUE HA LEÍDO EL USUARIO Y LOS METO EN UN ARRAY
        this.item.takeAllReadedBooks().subscribe(res => {
            if (res) {
                if (res.length > 0) {
                    this.allReadedBooks = res;
                } else {
                    this.noLeidos = true;
                }
            }
        });

        // ME TRAIGO TODOS LOS LIBROS FAVORITOS DEL USUARIO Y LOS METO EN UN ARRAY
        this.item.takeAllFavsBooks().subscribe(res => {
            if (res.length > 0) {
                this.allFavsBooks = res;
            }
        });
    }

    // ABRIR MODAL ELIMINAR LEIDO
    openModalEliminarLeido(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    // ABRIR MODAL ELIMINAR FAVORITO
    openModalEliminarFavorito(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    // ABRIR MODAL FAVORITO
    openModalFavorito(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    // CERRAR MODAL
    closeModal(template: TemplateRef<any>) {
        this.modalRef.hide();
    }

    // BORRAR LIBRO DE LISTA LEÍDOS
    borrarLeido(template: TemplateRef<any>, k: any) {
        this.item.borrarLeido(k.idLibro).subscribe(res => {
            if (res) {
                this.closeModal(template);
                setTimeout(() => {
                    const index = this.allReadedBooks.indexOf(k);
                    this.allReadedBooks.splice(index, 1);
                    if (this.allReadedBooks.length === 0) {
                        this.noLeidos = true;
                    }
                }, 1000);
            } else {
                this.item.logout();
            }
        },
        err => {
            if (err.status === 404) {
                this.closeModal(template);
                this.router.navigate(['/pag404']);
            }
        });
    }

    // BORRAR LIBRO DE LISTA FAVORITO
    borrarFavorito(idLeido: number) {
        const indexFav = this.allFavsBooks.findIndex(fav => fav.id === idLeido);
        this.item.borrarFavorito(idLeido).subscribe(res => {
            this.allFavsBooks.splice(indexFav, 1);
        },
        err => {
            if (err.status === 404) {
                this.router.navigate(['/pag404']);
            }
        });
        this.modalRef.hide();
    }

    // AÑADIR LEÍDO COMO FAVORITO
    addFavorito(template: TemplateRef<any>, id: number) {
        this.item.addFavorito(id).subscribe(res => {
            this.allFavsBooks.push(res.libro[0]);
            this.openModalFavorito(template);
            this.play();
        },
        err => {
            if (err.status === 404) {
                this.router.navigate(['/pag404']);
            }
        });
    }

    // COMPROBAR LIBRO FAVORITO
    existeLibroFavorito(idGB: string): boolean {
        return this.allFavsBooks.some(libro => {
            return libro.idGB === idGB;
        });
    }

    // SONIDO AL AÑADIR FAVORITO
    play() {
        let audio = new Audio('../../../assets/coin.mp3');
        audio.play();
    }
 }
