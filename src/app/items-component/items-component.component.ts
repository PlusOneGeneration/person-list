import {Component, OnInit} from '@angular/core';
import {Item} from "./Item";
import {ItemService} from "./item.service";
import {Router} from "@angular/router";
import {ZoneService} from "../zone.service";

@Component({
  selector: 'app-items-component',
  templateUrl: './items-component.component.html',
  styleUrls: ['./items-component.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  contacts:Item[] = [];

  // item: Item = null;

  constructor(private itemService: ItemService,
              private router: Router,
              private  zoneService: ZoneService) {
  }

  ngOnInit() {

    // this.item = new Item();
    this.itemService.getItems()
      .subscribe((items) => {
        this.zoneService.run(() => {
          this.items = items;
        })

      })

    // this.items = this.itemService.getItems();

  }

  // init() {
  //   this.zoneService.run(() => {
  //     // this.contacts.forEach((contact) => {
  //     //   this.items.push(contact);
  //     // })
  //
  //
  //   })
  //
  // }

}
