import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { PublicRoutingModule } from './public-routing.module';

import * as fromContainers from './containers';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    // CommonModule,
    // FormsModule,
    // ReactiveFormsModule,
    SharedModule,
    RouterModule,
    PublicRoutingModule
  ],
  providers: [
    
  ],
  declarations: [
    ...fromContainers.containers
  ]
})
export class PublicModule { }
