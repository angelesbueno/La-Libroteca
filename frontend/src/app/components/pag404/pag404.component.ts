import { Component, OnInit, TemplateRef } from "@angular/core";
import { ItemService } from "./../../services/item.service";

@Component({
    selector: 'app-pag404',
    templateUrl: './pag404.component.html',
    styleUrls: ['./pag404.component.scss']
})
export class Pag404Component implements OnInit {

    constructor(private item: ItemService) { }

    ngOnInit() {
    }

}
