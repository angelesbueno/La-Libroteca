import { Component, OnInit, TemplateRef } from "@angular/core";
import {
    FormsModule,
    ReactiveFormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from "@angular/forms";
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

// Services
import { ItemService } from "../../services/item.service";

@Component({
    selector: "app-busqueda-titulo",
    templateUrl: "./busqueda-titulo.component.html",
    styleUrls: ["./busqueda-titulo.component.scss"]
})
export class BusquedaTituloComponent implements OnInit {
    public formTitulo: FormGroup;
    public invalido = false;
    public titulo: string;
    public respuesta = false;
    public listalib: any;
    public libroLeido = false;
    public libroAdded = false;
    public noLibro = false;
    public idAddedBook: string;
    public allReadedBooks: any[] = [];
    public p: number = 1;
    public errorGb = false;

    modalRef: BsModalRef;

    constructor(private item: ItemService, private formBuilder: FormBuilder, private router: Router, private modalService: BsModalService) {}

    ngOnInit() {
        // COMPRUEBO TOKEN CORRECTO
        this.item.postCheckToken().subscribe(res => {
            if (!res) {
                this.item.setActivate(false);
                this.item.logout();
            }
        });

        // OBTENGO LOS IDS DE TODOS LOS LIBROS QUE HA LEÍDO EL USUARIO
        this.item.takeAllReadedBooks().subscribe(res => {
            this.allReadedBooks = res;
        });

        // FORMULARIO REACTIVO
        this.formTitulo = this.formBuilder.group({
            titulo: ['', [Validators.required]]
        });
    }

    // BUSCAR TÍTULO EN LA API GOOGLE BOOKS
    async enviarTitulo(formTitulo) {
        if (this.formTitulo.status === 'INVALID') {
            this.invalido = true;
        } else {
            this.titulo = formTitulo.value.titulo;
            await this.item.getSearchByTit(this.titulo).subscribe(res => {
                if (res.totalItems > 0) {
                    if (res.items.length > 0) {
                        this.respuesta = true;
                        this.errorGb = false;
                        this.noLibro = false;
                        this.listalib = res.items.slice();
                    }
                } else {
                    this.noLibro = true;
                }
            }, err => {
                if (err.status === 503) {
                    this.errorGb = true;
                }
            });
        }
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
        }
        await this.item.addLeido(libroDef).subscribe(res => {
            if (res) {
                if (res.added) {
                    this.allReadedBooks.push(res.libro[0]);
                    this.openModal(template);
                }
            } else {
                this.item.logout();
            }
        }, err => {
            if (err.status === 404) {
                this.router.navigate(['/pag404']);
            }
        });
    }

    // ABRIR MODAL
    openModal(template: TemplateRef<any>) {
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
}
