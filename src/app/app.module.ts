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

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ItemService,
    ZoneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
