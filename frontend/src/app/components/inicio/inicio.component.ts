import { ItemService } from "./../../services/item.service";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-inicio",
    templateUrl: "./inicio.component.html",
    styleUrls: ["./inicio.component.scss"]
})
export class InicioComponent implements OnInit {
    public visible = false;
    constructor(private item: ItemService, private router: Router) {}

    @ViewChild("myCanvas") myCanvas: ElementRef;

    public context: CanvasRenderingContext2D;

    // PARA CARGAR CANVAS
    ngAfterViewInit(): void {

        setTimeout(() => {
            this.context = (<HTMLCanvasElement>(
                this.myCanvas.nativeElement
            )).getContext("2d");
            const x =
                (this.myCanvas.nativeElement as HTMLCanvasElement).width / 2;
            const y =
                (this.myCanvas.nativeElement as HTMLCanvasElement).height / 2;
            let img = new Image();
            img.onload = () => {
                this.context.drawImage(img, 40, 30, 215, 150);
            };
            img.src = "../../../assets/logo-libroteca.png";
        
        }, 1000);
    }

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
    }
}
