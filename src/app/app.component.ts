import {Component, OnInit} from '@angular/core';
import {ItemService} from "./items-component/item.service";
declare let navigator: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    document.addEventListener("deviceready", onDeviceReady, false);
    let self = this;
    console.log('app ready');

    function onDeviceReady() {
      let filter = [""];
      console.log('window', window);

      navigator.contacts.find(filter, onSuccess, onError);

      function onSuccess(contacts) {

        self.itemService.contacts$.next(contacts)

      };

      function onError(contactError) {
        alert('onError!');
      };
    }
  }

}
