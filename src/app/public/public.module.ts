import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { PublicRoutingModule } from './public-routing.module';

import * as fromContainers from './containers';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    PublicRoutingModule,
    // TranslateModule.forRoot()
  ],
  providers: [

  ],
  declarations: [
    ...fromContainers.containers
  ]
})
export class PublicModule { }
