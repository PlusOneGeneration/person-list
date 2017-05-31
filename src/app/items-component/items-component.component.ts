import {Component, OnInit} from '@angular/core';
import {Item} from "./Item";
import {ItemService} from "./item.service";
import {Router} from "@angular/router";
import {ZoneService} from "../zone.service";
import {CordovaService} from "../cordova.service";

declare let ContactFindOptions: any;

@Component({
  selector: 'app-items-component',
  templateUrl: './items-component.component.html',
  styleUrls: ['./items-component.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  contacts: Item[] = [];

  constructor(private itemService: ItemService,
              private router: Router,
              private  zoneService: ZoneService,
              private cordovaService: CordovaService) {
  }

  ngOnInit() {
    this.itemService.getItems()
      .subscribe((items) => {
        this.zoneService.run(() => {
          this.items = items;
          console.log('items', items);
        })
      })
  }

  deleteContact(contact) {
    let options = new ContactFindOptions();
    options.filter = contact.id;
    options.multiple = false;
    let fields = ["id"];
    return this.cordovaService.findContact(fields, options)
      .then((contacts) => {
        let contact = contacts[0];
        return this.cordovaService.removeContacts(contact)
          .then(() => {
            this.itemService.getContacts()
          })
          .catch((err) => console.log('err', err));
      })
      .catch((err) => console.log('err', err));

  }

}
