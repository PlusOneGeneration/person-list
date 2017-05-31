import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Item} from "../items-component/Item";
import {ActivatedRoute} from "@angular/router";
import {ItemService} from "../items-component/item.service";
import {CordovaService} from "../cordova.service";

declare let ContactFindOptions: any;

@Component({
  selector: 'app-item-detail',
  templateUrl: 'item-detail.component.html',
  styleUrls: ['item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item: Item = null;

  constructor(private route: ActivatedRoute,
              private itemService: ItemService,
              private cordovaService: CordovaService,
              private location: Location) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    this.item = this.itemService.getItem(id);
  }

  deleteContact() {
    let options = new ContactFindOptions();
    options.filter = this.item.id;
    options.multiple = false;
    let fields = ["id"];
    return this.cordovaService.findContact(fields, options)
      .then((contacts) => {
        let contact = contacts[0];
        return this.cordovaService.removeContacts(contact)
          .then(() => {
            this.itemService.getContacts();
            this.goBack();
          })
          .catch((err) => console.log('err', err));
      })
      .catch((err) => console.log('err', err));

  }

  goBack(): void {
    this.location.back();
  }

}
