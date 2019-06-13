import { Component, OnInit } from "@angular/core";
import { ItemService } from "src/app/services/item.service";

@Component({
    selector: "app-perfil",
    templateUrl: "./perfil.component.html",
    styleUrls: ["./perfil.component.scss"]
})
export class PerfilComponent implements OnInit {
    constructor(private item: ItemService) { }

    public visible = false;

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

        // CARGAR SCRIPT DEL SLIDER
        const tag = document.createElement("script");
        tag.src = "../../../assets/slider.min.js";
        document.getElementsByTagName("head")[0].appendChild(tag);
    }
}
