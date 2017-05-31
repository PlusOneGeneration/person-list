import {Component, OnInit} from '@angular/core';
import {Item} from "./Item";
import {ItemService} from "./item.service";
import {Router} from "@angular/router";
import {ZoneService} from "../zone.service";

declare let navigator: any;
declare let ContactFindOptions: any;

@Component({
  selector: 'app-items-component',
  templateUrl: './items-component.component.html',
  styleUrls: ['./items-component.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  contacts: Item[] = [];
  self = this;

  constructor(private itemService: ItemService,
              private router: Router,
              private  zoneService: ZoneService) {
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
    let self = this;
    let options = new ContactFindOptions();
    options.filter = contact.id;
    options.multiple = false;
    let fields = ["id"];

    navigator.contacts.find(fields, contactfindSuccess, contactfindError, options);

    function contactfindSuccess(contacts) {

      let contact = contacts[0];
      contact.remove(contactRemoveSuccess, contactRemoveError);

      function contactRemoveSuccess() {
        let contacts = self.items.filter((item) => {
          return item.id !== contact.id;
        });
        console.log('contacts', contacts);
        self.itemService.contacts$.next(contacts)

      }

      function contactRemoveError(message) {
        alert('Failed because: ' + message);
      }
    }

    function contactfindError(message) {
      alert('Failed because: ' + message);
    }

  }

}
