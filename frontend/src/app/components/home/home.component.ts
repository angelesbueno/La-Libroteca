import { ItemService } from "./../../services/item.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
    FormsModule,
    ReactiveFormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from "@angular/forms";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
    public noAuth = false;
    public loginForm: FormGroup;
    public invalido = false;

    constructor(
        private formBuilder: FormBuilder,
        private item: ItemService,
        private router: Router
    ) {}

    ngOnInit() {
        // FORMULARIO REACTIVO
        this.loginForm = this.formBuilder.group({
            usr: ["", Validators.required],
            pwd: ["", Validators.required]
        });

        // SIEMPRE QUE SE ACCEDE A LA HOME, SE LIMPIA SESSIONSTORAGE
        if (
            this.item.takeTokenSessionStorage ||
            this.item.takeUsernameSessionStorage
        ) {
            sessionStorage.clear();
        }
    }

    // LOGIN
    async login() {
        if (this.loginForm.status === "INVALID") {
            this.invalido = true;
        } else {
            await this.item
                .postCheckUser(this.loginForm.value)
                .subscribe(res => {
                    if (!res) {
                        this.noAuth = true;
                        this.item.setActivate(false);
                    } else {
                        this.noAuth = false;
                        this.item.saveTokenSessionStorage(res.token);
                        this.item.saveUserSessionStorage(res.usuario.username);
                        setTimeout(
                            () => this.router.navigate(["/inicio"]),
                            2000
                        );
                        this.item.setActivate(true);
                    }
                });
        }
    }
}
