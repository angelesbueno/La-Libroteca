import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import {
    FormsModule,
    ReactiveFormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder,
    ValidationErrors,
    AsyncValidatorFn
} from "@angular/forms";

import { CustomValidatorsService } from "./../../services/custom-validators.service";
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
    selector: 'app-editar-perfil',
    templateUrl: './editar-perfil.component.html',
    styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit {

    public invalido = false;
    public editado = false;
    private regex = '^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$';

    constructor(private formBuilder: FormBuilder, private item: ItemService, private customValidators: CustomValidatorsService, private router: Router) { }

    public usuario: any = {};
    public idUsuario: number;
    public editForm: FormGroup = this.formBuilder.group({
        nombre: ['', [Validators.required]],
        apellidos: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.pattern(this.regex)]],
        usuario: ['',
            [
                Validators.required,
                Validators.minLength(4)
            ], this.customValidators.userValidator.bind(this)
        ],
        contrasena: ['', [Validators.required, Validators.minLength(4)]],
        contrasena2: [
            '',
            [Validators.required, this.customValidators.passwordValidator]
        ]
    });

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

        this.crearFormulario();
    }

    // OBTENGO TODOS LOS DATOS DEL USUARIO
    takeUser(callback) {
        this.item.takeUser().subscribe(res => {
            this.usuario = res[0];
            this.idUsuario = this.usuario.idUsuario;
            callback(this.usuario);
        });
    }

    // RESETEO EL FORMULARIO PARA METER LOS VALORES
    crearFormulario() {
        this.takeUser(usuario => {
            this.editForm.reset(usuario);
            this.editForm.get('usuario').setAsyncValidators(this.userValidatorEditar(this.usuario));
            this.editForm.get('email').setAsyncValidators(this.emailValidatorEditar(this.usuario));
        });
    }

    // EDITAR USUARIO
    async editar(form) {
        if (this.editForm.status === 'INVALID') {
            this.invalido = true;
        } else {
            await this.item.updateUser(form.value, this.idUsuario).subscribe(res => {
                if (res) {
                    this.editado = true;
                    this.item.saveUserSessionStorage(form.value.usuario);
                    this.editForm.reset();
                    setTimeout(() => {
                        this.router.navigate(['/home']);
                    }, 5000);
                }
            }, err => {
                if (err.status === 404) {
                    this.router.navigate(['/pag404']);
                }
            });
        }
    }

    // VALIDACIÓN ASÍNCRONA PARA COMPROBAR SI EXISTE USERNAME EN LA BBDD, SÍ PERMITE PONER EL QUE YA TENÍA
    userValidatorEditar(usuario): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            if (control && (control.value !== null || control.value !== undefined)) {
                const userValue = control.value;
                if (userValue !== usuario.username) {
                    return this.item.searchUser(userValue).pipe(map((res) => {
                        return res.length > 0 ? { userTaken: true } : null;
                    }));
                } else {
                    return Observable.create(observer => {
                        observer.next(null);
                    });
                }
            }
        };
    }

    // VALIDACIÓN ASÍNCRONA PARA COMPROBAR SI EXISTE EMAIL EN LA BBDD, SÍ PERMITE PONER EL QUE YA TENÍA
    emailValidatorEditar(usuario): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            if (control && (control.value !== null || control.value !== undefined)) {
                const emailValue = control.value;

                if (emailValue !== usuario.email) {
                    return this.item.searchEmail(emailValue).pipe(map((res) => {
                        return res.length > 0 ? { emailTaken: true } : null;
                    }));
                } else {
                    return Observable.create(observer => {
                        observer.next(null);
                    });
                }
            }
        };
    }
}
