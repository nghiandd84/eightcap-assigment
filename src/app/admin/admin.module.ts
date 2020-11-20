import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminRoutingModule } from "./admin-routing.module";

import * as fromGuards from "./guards";

import * as fromContainers from "./containers";



@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [
    ...fromGuards.guards
  ],
  declarations: [
    ...fromContainers.containers,
  ]
})
export class AdminModule { }
