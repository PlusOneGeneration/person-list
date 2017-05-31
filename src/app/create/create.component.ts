import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Item, PhoneNumber} from "../items-component/Item";
import {ActivatedRoute} from "@angular/router";
import {ItemService} from "../items-component/item.service";
import {CordovaService} from "../cordova.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  item: Item = null;
  phoneNumber: PhoneNumber = null;

  constructor(private location: Location,
              private route: ActivatedRoute,
              private itemService: ItemService,
              private cordovaService: CordovaService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    this.item = id ? this.itemService.getItem(id) : new Item();
    // this.phoneNumber = id? this.item.phoneNumbers[0]: new PhoneNumber();
  }

  goBack(): void {
    this.location.back();
  }

  save() {
    return this.cordovaService.saveContact(this.item)
      .then((result) => {
        // this.itemService.save(result, this.item);
        this.itemService.getContacts();
        this.goBack();
      })
      .catch((err) => console.log('err', err));
  }

}
