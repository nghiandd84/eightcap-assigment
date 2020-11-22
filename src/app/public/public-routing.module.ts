import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Containers
import * as fromContainers from './containers';

const PUBLIC_ROUTES: Routes = [
  {
    path: '',
    component: fromContainers.LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: fromContainers.HomeComponent,
      },
      {
        path: 'about',
        pathMatch: 'full',
        component: fromContainers.AboutComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(PUBLIC_ROUTES)],
  exports: [RouterModule],
  declarations: [],
})
export class PublicRoutingModule {}
