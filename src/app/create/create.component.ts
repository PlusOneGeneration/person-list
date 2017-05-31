import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Item, PhoneNumber} from "../items-component/Item";
import {ActivatedRoute} from "@angular/router";
import {ItemService} from "../items-component/item.service";

declare var navigator: any;

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
              private itemService: ItemService) {
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
    let self = this;

    // self.item.phoneNumbers.push(self.phoneNumber);

    let myContact = navigator.contacts.create(self.item);
    myContact.save(contactSuccess, contactError);


    function contactSuccess(contact) {
      // self.goBack();
      alert('Contact was saved');
      let contacts = self.itemService.contacts$.getValue();
      if (!self.item.id) {
        contacts.push(contact);
        self.itemService.contacts$.next(contacts)
      }
    }

    function contactError(message) {
      alert('Failed because: ' + message);
    }

  }

}
