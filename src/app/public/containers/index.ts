import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';

export const containers: any[] = [
  LayoutComponent,
  HomeComponent,
  AboutComponent,
];

export * from './layout/layout.component';
export * from './home/home.component';
export * from './about/about.component';
