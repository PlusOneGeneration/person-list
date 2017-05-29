import {Component, OnInit} from '@angular/core';
import {Item} from "../items-component/Item";
import {ActivatedRoute} from "@angular/router";
import {ItemService} from "../items-component/item.service";

@Component({
    selector: 'app-item-detail',
    templateUrl: 'item-detail.component.html',
    styleUrls: ['item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

    item: Item = null;

    constructor(private route: ActivatedRoute,
                private itemService: ItemService) {
    }

    ngOnInit() {
        const id = this.route.snapshot.params["id"];

        this.item = this.itemService.getItem(id);
    }

}
