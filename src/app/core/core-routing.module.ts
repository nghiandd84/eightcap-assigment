import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  LocalizeRouterModule,
  LocalizeParser,
  LocalizeRouterSettings,
  ManualParserLoader,
  LocalizeRouterPipe,
} from '@gilsdav/ngx-translate-router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Location } from '@angular/common';

import { HttpClient } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import * as fromContainers from './containers';

import { LANGUAGES } from '@shared/index';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('../public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('../admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '**',
    component: fromContainers.PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SharedModule,
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: (
          translate: TranslateService,
          location: Location,
          settings: LocalizeRouterSettings
        ) => {
          return new ManualParserLoader(
            translate,
            location,
            settings,
            LANGUAGES.map((item) => item.key)
          );
        },
        deps: [TranslateService, Location, LocalizeRouterSettings],
      },
    }),
  ],
  exports: [
    RouterModule
  ],
  providers: [LocalizeRouterPipe],
})
export class CoreRoutingModule {}
