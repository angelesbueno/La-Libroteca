import { NgForm } from '@angular/forms';
import { ItemService } from "./../../services/item.service";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit, TemplateRef } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Component({
    selector: "app-libro-detalle-leido",
    templateUrl: "./libro-detalle-leido.component.html",
    styleUrls: ["./libro-detalle-leido.component.scss"]
})
export class LibroDetalleLeidoComponent implements OnInit {
    public id: string;
    public libro: any;
    public allReadedBooks: any[] = [];
    public allFavsBooks: any[] = [];
    public sinopsis: string;
    public idAddedBook: string;
    public autor: any[] = [];
    public editorial: string;
    public libroError = false;
    public tengoLibro = false;

    notaInput: number;

    modalRef: BsModalRef;

    constructor(
        private activatedRoute: ActivatedRoute,
        private item: ItemService,
        private router: Router,
        private modalService: BsModalService, private location: Location
    ) {}

    ngOnInit() {
        // COMPRUEBO TOKEN CORRECTO
        this.item
            .postCheckToken()
            .subscribe(res => {
                if (!res) {
                    this.item.setActivate(false);
                    this.item.logout();
                }
            });

        // ME TRAIGO TODOS LOS LIBROS FAVORITOS DEL USUARIO Y LOS METO EN UN ARRAY
        this.item.takeAllFavsBooks().subscribe(res => {
            if (res.length > 0) {
                this.allFavsBooks = res;
            }
        });

        // MOSTRAR EL LIBRO EN CUESTIÓN
        this.activatedRoute.params.subscribe(params => {
            this.id = params.id;
            this.item.takeAllReadedBooks().subscribe(res => {
                if (res.length > 0) {
                    this.allReadedBooks = res;
                    this.allReadedBooks.forEach(book => {
                        if (Number(this.id) === book.idLibro) {
                            this.libro = book;
                            this.tengoLibro = true;
                            if (this.libro.observaciones == null || this.libro.observaciones == '') {
                                this.libro.observaciones = 'Este libro no tiene comentarios';
                            }
                            if (this.libro.nota == null) {
                                this.libro.nota = 0;
                            }
                        } else {
                            this.libroError = true;
                        }
                    });
                }
            });
        });
    }

    // ABRIR MODAL
    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    // ABRIR MODAL FAVORITO
    openModalFavorito(template: TemplateRef<any>, id: number) {
        this.modalRef = this.modalService.show(template);
        this.addFavorito(id);
    }

    // ABRIR MODAL ELIMINAR FAVORITO
    openModalEliminarFavorito(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    // CERRAR MODAL
    closeModal(template: TemplateRef<any>) {
        this.modalRef.hide();
    }

    // BORRAR LIBRO DE LISTA LEÍDOS
    borrarLeido(idLibro: string) {
        this.item.borrarLeido(idLibro).subscribe(res => {
            this.router.navigate(['/leidos']);
        }, err => {
            if (err.status === 404) {
                this.modalRef.hide();
                this.router.navigate(['/pag404']);
            }
        });
        this.modalRef.hide();
    }

    // BORRAR LIBRO DE LISTA FAVORITO
    borrarFavorito(idLeido: number) {
        const indexFav = this.allFavsBooks.findIndex(fav => fav.id === idLeido);
        this.item.borrarFavorito(idLeido).subscribe(res => {
            this.allFavsBooks.splice(indexFav, 1);
        }, err => {
            if (err.status === 404) {
                this.modalRef.hide();
                this.router.navigate(['/pag404']);
            }
        });
        this.modalRef.hide();
    }

    // MODIFICAR PUNTUACIÓN DE LIBRO LEÍDO
    modificarNota(idLibro: string, formNota: NgForm) {
        if (formNota.controls.nota.value === "") {
            this.libro.nota = this.libro.nota;
        } else {
            this.libro.nota = formNota.controls.nota.value;
        }
        this.item.modificarNotaLibroLeido(idLibro, this.libro.nota).subscribe(res => {
        }, err => {
            if (err.status === 404) {
                this.modalRef.hide();
                this.router.navigate(['/pag404']);
            }
        });
        this.modalRef.hide();
    }

    // MODIFICAR COMENTARIOS DE LIBRO LEÍDO
    modificarComentarios(idLibro: string, formComentarios: NgForm) {
        if (formComentarios.controls.comentarios.value === "") {
            this.libro.observaciones = this.libro.observaciones;
        } else {
            this.libro.observaciones = formComentarios.controls.comentarios.value;
        }
        this.item.modificarComentariosLibroLeido(idLibro, this.libro.observaciones).subscribe(res => {
        }, err => {
            if (err.status === 404) {
                this.router.navigate(['/pag404']);
            }
        });
        this.modalRef.hide();
    }

    // AÑADIR LEÍDO COMO FAVORITO
    addFavorito(id: number) {
        this.item.addFavorito(id).subscribe(res => {
            this.allFavsBooks.push(res.libro[0]);
            this.play();
        });
    }

    // COMPROBAR LIBRO FAVORITO
    existeLibroFavorito(idGB: string): boolean {
        return this.allFavsBooks.some(libro => {
            return libro.idGB === idGB;
        });
    }

    volver() {
        this.location.back();
    }

    // SONIDO FAVORITO
    play() {
        let audio = new Audio('../../../assets/coin.mp3');
        audio.play();
    }
}
