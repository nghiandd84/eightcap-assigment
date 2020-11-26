import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import * as fromGuards from './guards';

import * as fromContainers from './containers';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [CommonModule, AdminRoutingModule, SharedModule],
  providers: [...fromGuards.guards],
  declarations: [...fromContainers.containers],
})
export class AdminModule {}
