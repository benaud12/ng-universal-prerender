import { Routes } from '@angular/router';
import { AngularComponent } from './components/angular/angular.component';
import { BeansComponent } from './components/beans/beans.component';
import { FlowersComponent } from './components/flowers/flowers.component';

export const appRoutes: Routes = [
  { path: '', component: AngularComponent },
  { path: 'beans', component: BeansComponent },
  { path: 'flowers', component: FlowersComponent }
];
