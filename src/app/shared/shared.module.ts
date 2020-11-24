import { NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as fromComponents from './components';
import * as fromPipes from './pipes';
import * as fromDirectives from './directives';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
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
    TranslateModule
  ]
})
export class SharedModule { }
