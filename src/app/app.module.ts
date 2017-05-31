import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app.routing";
import {ItemsComponent} from "./items-component/items-component.component";
import {ItemService} from "./items-component/item.service";
import { ItemDetailComponent } from './item-detail/item-detail.component';
import {ZoneService} from "./zone.service";
import { CreateComponent } from './create/create.component';
import {CordovaService} from "./cordova.service";
import {Angular2FontawesomeModule} from "angular2-fontawesome";

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemDetailComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Angular2FontawesomeModule
  ],
  providers: [
    ItemService,
    ZoneService,
    CordovaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
