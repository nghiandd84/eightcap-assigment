import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PublicRoutingModule } from './public-routing.module';

import * as fromContainers from './containers';
import * as fromComponents from './components';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule, RouterModule, PublicRoutingModule],
  providers: [],
  declarations: [...fromContainers.containers, ...fromComponents.components],
})
export class PublicModule {}
