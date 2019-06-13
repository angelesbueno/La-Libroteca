import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

import { Component, OnInit } from "@angular/core";

import { ItemService } from "./../../services/item.service";
import { CustomValidatorsService } from "./../../services/custom-validators.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public invalido = false;
  public registrado = false;
  public usuarioControlValue: string;
// tslint:disable-next-line: max-line-length
  private regex = '^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$';

  constructor(
    private formBuilder: FormBuilder,
    private item: ItemService,
    private customValidators: CustomValidatorsService
  ) {}

  ngOnInit() {
    // SE CONSTRUYE FORMULARIO REACTIVO
    this.registerForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.regex)], this.customValidators.emailValidator.bind(this)],
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
  }

  // REGISTRO DE USUARIO
  async onSubmit() {
    if (this.registerForm.status === 'INVALID') {
      this.invalido = true;
    } else {
      await this.item.postNewUser(this.registerForm.value).subscribe(res => {
        this.registrado = true;
        this.registerForm.reset();
      });
    }
  }
}
