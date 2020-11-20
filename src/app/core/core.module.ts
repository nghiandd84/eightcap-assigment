import { NgModule, SkipSelf, Optional } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import * as fromContainers from "./containers";
import { CoreRoutingModule } from './core-routing.module';
import { throwIfAlreadyLoaded } from './common/module-import-guard';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreRoutingModule
  ],
  providers: [

  ],
  declarations: [...fromContainers.containers],
  exports: [
    ...fromContainers.containers
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
