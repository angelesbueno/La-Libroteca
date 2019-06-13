import { ItemService } from "./../../services/item.service";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit, TemplateRef } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Component({
    selector: "app-libro-detalle",
    templateUrl: "./libro-detalle.component.html",
    styleUrls: ["./libro-detalle.component.scss"]
})
export class LibroDetalleComponent implements OnInit {
    public id: string;
    public libro: any;
    public allReadedBooks: any[] = [];
    public sinopsis: string;
    public idAddedBook: string;
    public autor: any[] = [];
    public editorial: string;

    modalRef: BsModalRef;

    constructor(
        private activatedRoute: ActivatedRoute,
        private item: ItemService,
        private router: Router,
        private location: Location,
        private modalService: BsModalService
    ) {}

    ngOnInit() {
        // COMPRUEBO TOKEN CORRECTO
        this.item.postCheckToken().subscribe(res => {
            if (!res) {
                this.item.setActivate(false);
                this.item.logout();
            }
        });

        // MOSTRAR EL LIBRO EN CUESTIÓN
        this.activatedRoute.params.subscribe(params => {
            this.id = params.id;
            this.item.getSearchById(this.id).subscribe(res => {
                this.libro = JSON.parse(JSON.stringify(res));
                this.sinopsis = this.libro.volumeInfo.description
                    ? this.libro.volumeInfo.description
                    : "Información no disponible";
                this.editorial = this.libro.volumeInfo.publisher
                    ? this.libro.volumeInfo.publisher
                    : "Editorial no disponible"
                if (this.libro.volumeInfo.authors) {
                    this.libro.volumeInfo.authors.forEach(autor => {
                        this.autor.push(autor);
                    });
                } else {
                    this.autor[0] = 'Autor no disponible';
                }
            });
        });

        // ME TRAIGO TODOS LOS LIBROS QUE HA LEÍDO EL USUARIO Y LOS METO EN UN ARRAY
        this.item.takeAllReadedBooks().subscribe(res => {
            if (res.length > 0) {
                this.allReadedBooks = res;
            }
        });
    }

    // AÑADIR LIBRO A LEÍDOS
    async addLeido(template: TemplateRef<any>, libro: any) {
        const libroDef = {
            titulo: libro.volumeInfo.title,
            autor: libro.volumeInfo.authors
                   ? libro.volumeInfo.authors[0]
                   : "Autor no disponible",
            editorial: libro.volumeInfo.publisher
                       ? libro.volumeInfo.publisher
                       : "Editorial no disponible",
            sinopsis: libro.volumeInfo.description
                      ? libro.volumeInfo.description
                      : "Información no disponible",
            portada: !libro.volumeInfo.imageLinks ? '../../../assets/portada.png' :                libro.volumeInfo.imageLinks.smallThumbnail,
            idGB: libro.id
        };
        await this.item.addLeido(libroDef).subscribe(res => {
            if (res.added) {
                this.allReadedBooks.push(res.libro[0]);
                this.openModal(template);
            }
        }, err => {
            if (err.status === 404) {
                this.router.navigate(['/pag404']);
            }
        });
    }

    // ABRIR MODAL
    openModal(template: TemplateRef<any>) {;
        this.modalRef = this.modalService.show(template);
      }

    // CERRAR MODAL
    closeModal(template: TemplateRef<any>) {
        this.modalRef.hide();
    }

    // COMPROBAR LIBRO LEÍDO
    existeLibroLeido(idGB: string): boolean {
        return this.allReadedBooks.some(libro => {
            return libro.idGB === idGB;
        });
    }

    // VOLVER ATRÁS
    volver() {
        this.location.back();
    }
}
