import { NgModule } from "@angular/core";
import {RouterModule} from "@angular/router";
import {ItemsComponent} from "./items-component/items-component.component";
import {ItemDetailComponent} from "./item-detail/item-detail.component";
import {CreateComponent} from "./create/create.component";



const routes = [
    {path: "", redirectTo: "/items", pathMatch: "full"},
    {path: "items", component: ItemsComponent},
    {path: "create", component: CreateComponent},
    {path: "items/:id", component: ItemDetailComponent},
    {path: "items/:id/edit", component: CreateComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
