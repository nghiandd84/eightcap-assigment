import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as fromComponents from './components';
import * as fromPipes from './pipes';
import * as fromDirectives from './directives';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    ...fromComponents.components,
    ...fromDirectives.directives,
    ...fromPipes.pipes,
  ],
  exports: [
    ...fromComponents.components,
    ...fromDirectives.directives,
    ...fromPipes.pipes,
  ]
})
export class SharedModule { }
