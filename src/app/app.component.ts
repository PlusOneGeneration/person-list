import {Component, OnInit} from '@angular/core';
import {ZoneService} from "./zone.service";
import {ItemService} from "./items-component/item.service";
declare var navigator: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private zoneService: ZoneService,
  private itemService: ItemService) {
  }

  ngOnInit() {
    document.addEventListener("deviceready", onDeviceReady, false);
    let self = this;


    function onDeviceReady() {
      // self.zoneService.run(() => {
        alert('ready');
        let filter = [""];

         navigator.contacts.find(filter, onSuccess, onError);

        function onSuccess(contacts) {

          self.itemService.contacts$.next(contacts)

        };

        function onError(contactError) {
          alert('onError!');
        };
      // })
    }
  }
}
