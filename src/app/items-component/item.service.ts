import {Injectable} from '@angular/core';
import {Item} from "./Item";
import {BehaviorSubject, Observable} from "rxjs";
declare let navigator: any;

@Injectable()
export class ItemService {
  contacts$: any = new BehaviorSubject(null);
  items: Item[] = [];


  constructor() {
    console.log('service ready');
    this.contacts$.subscribe((contacts) => {
      this.items = contacts;
    });


     let self = this;

    console.log('this', self);
    // document.addEventListener("deviceready", self.onDeviceReady, false);
    console.log('document', document);
  }
  //
  // onDeviceReady(event) {
  //
  //   let filter = [""];
  //   console.log('navigator', navigator);
  //   navigator.contacts.find(filter, this.onSuccess, this.onError);
  // }
  //
  // onSuccess(contacts) {
  //   this.contacts$.next(contacts)
  // }
  //
  // onError(contactError) {
  //   alert('onError!');
  // }

  getItems(): Observable<Item[]> {
    return this.contacts$;
  }

  getItem(id: string): Item {
    return this.items.find((item) => item.id === id)
  }


}
