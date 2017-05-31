import {Injectable} from '@angular/core';
import {Item} from "./Item";
import {BehaviorSubject, Observable} from "rxjs";
import {CordovaService} from "../cordova.service";

@Injectable()
export class ItemService {
  contacts$: any = new BehaviorSubject(null);
  items: Item[] = [];

  constructor(private cordovaService: CordovaService) {
    this.getContacts();
    this.contacts$.subscribe((contacts) => {
      this.items = contacts;
    });
  }

  getItems(): Observable<Item[]> {
    return this.contacts$;
  }

  getItem(id: string): Item {
    return this.items.find((item) => item.id === id)
  }

  getContacts() {
        let filter = [""];
        this.cordovaService.findContact(filter, null)
          .then((contacts) => {
            this.contacts$.next(contacts)
          })
  }
}
