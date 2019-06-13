import { Component, OnInit, TemplateRef } from "@angular/core";
import { ItemService } from "./../../services/item.service";
import { Router } from "@angular/router";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

    public visible = false;
    public ids: any[] = [];
    public noLeidos = false;
    public noFavoritos = false;
    public respuesta = false;
    public borrado = false;
    public allReadedBooks: any[] = [];
    public allFavsBooks: any[] = [];
    public p: number = 1;

    modalRef: BsModalRef;

    constructor(private item: ItemService, private router: Router, private modalService: BsModalService) {}

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

        // OBTENGO TODOS LOS LIBROS QUE HA LEÍDO EL USUARIO Y LOS METO EN UN ARRAY
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
            } else {
                this.noFavoritos = true;
            }
        });
    }

    // ABRIR MODAL ELIMINAR LEÍDO
    openModalEliminarLeido(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
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
    borrarLeido(k: any) {
        this.item.borrarLeido(k.idLibro).subscribe(res => {
            setTimeout(() => {
                const index = this.allFavsBooks.indexOf(k);
                this.allFavsBooks.splice(index, 1);
                if (this.allFavsBooks.length == 0) {
                    this.noLeidos = true;
                }
            }, 1000);
        }, err => {
            if (err.status === 404) {
                this.modalRef.hide();
                this.router.navigate(['/pag404']);
            }
        });
        this.modalRef.hide();
    }

    // BORRAR LIBRO DE LISTA FAVORITO
    borrarFavorito(k: any) {
        this.item.borrarFavorito(k.id).subscribe(res => {
            setTimeout(() => {
                const index = this.allFavsBooks.indexOf(k);
                this.allFavsBooks.splice(index, 1);
                if (this.allFavsBooks.length == 0) {
                    this.noFavoritos = true;
                }
            }, 1000);
        }, err => {
            if (err.status === 404) {
                this.modalRef.hide();
                this.router.navigate(['/pag404']);
            }
        });
        this.modalRef.hide();
    }
}
