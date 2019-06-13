import { Component, OnInit } from "@angular/core";
import { ItemService } from "src/app/services/item.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
    public username: string;
    public rol: string;
    constructor(private item: ItemService, private router: Router) {}

    ngOnInit() {
        // OBTENGO ROL DE USUARIO LOGADO PARA MOSTRAR O NO LA OPCIÓN DE NAVEGAR A LA LSITA DE TODOS LOS USUARIOS EN EL NAVBAR
        // LA COMPROBACIÓN DEL ROL SE HACE EN LA PLANTILLA CON UN *ngIf
        this.username = this.item.takeUsernameSessionStorage();
        this.item.takeUser().subscribe(res => {
            this.rol = res[0].rol;
        });
    }

    // LOGOUT
    logout() {
        this.item.logout();
    }
}
