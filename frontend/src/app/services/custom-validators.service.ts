import { ItemService } from "./item.service";
import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class CustomValidatorsService {
  constructor(private item: ItemService) {}

  // VALIDACIÓN QUE COMPRUEBA SI LAS CONTRASEÑAS COINCIDEN
  passwordValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
      const password2Value = control.value;
      const passControl = control.root.get("contrasena");
      if (passControl) {
        const passValue = passControl.value;
        if (passValue !== password2Value) {
          return {
            isError: true
          };
        }
      }
    }
    return null;
  }

  // VALIDACIÓN QUE COMPRUEBA SI EL USERNAME YA ESTÁ REGISTRADO
  userValidator(control: AbstractControl): Observable<any> {
    if (control && (control.value !== null || control.value !== undefined)) {
      const userValue = control.value;
      return this.item.searchUser(userValue).pipe(map((res) => {
        return res.length > 0 ? { userTaken: true } : null;
      }));
    }
  }

  // VALIDACIÓN QUE COMPRUEBA SI EL EMAIL YA ESTÁ REGISTRADO
  emailValidator(control: AbstractControl): Observable<any> {
    if (control && (control.value !== null || control.value !== undefined)) {
      const emailValue = control.value;
      return this.item.searchEmail(emailValue).pipe(map((res) => {
        return res.length > 0 ? { emailTaken: true } : null;
      }));
    }
  }
}
