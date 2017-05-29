import {Injectable} from '@angular/core';
import {Item} from "./Item";
import {BehaviorSubject, Observable} from "rxjs";
declare var navigator: any;

@Injectable()
export class ItemService {
  contacts$: any = new BehaviorSubject(null);
  items: Item[] = [
    // {id:'1', displayName:'Bob'}
  ];

  constructor() {

  }

  onDeviceReady() {
    let filter = ["mobile"];

    navigator.contacts.find(filter, this.onSuccess, this.onError);
  }

  onSuccess(contacts) {
    this.contacts$.next(contacts)
  }

  onError(contactError) {
    alert('onError!');
  }

  getItems(): Observable<Item[]> {
    return this.contacts$;
  }

  // getItems() {
  //   return this.items;
  // }


  getItem(id: string): Item {
    return this.items.find((item) => item.id === id)
  }


}
