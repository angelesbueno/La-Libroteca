import { Component, OnInit } from "@angular/core";
import { ItemService } from "./../../services/item.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Component({
    selector: "app-lista-usuarios",
    templateUrl: "./lista-usuarios.component.html",
    styleUrls: ["./lista-usuarios.component.scss"]
})
export class ListaUsuariosComponent implements OnInit {
    constructor(private item: ItemService) {}

    public users: any[] = [];

    ngOnInit() {
        // COMPRUEBO TOKEN CORRECTO
        this.item.postCheckToken().subscribe(res => {
            if (!res) {
                this.item.setActivate(false);
                this.item.logout();
            }
        });

        // OBTENGO TODOS LOS USUARIOS REGISTRADOS
        this.item.allUsers().subscribe(res => {
            this.users = res;
        });
    }
}
