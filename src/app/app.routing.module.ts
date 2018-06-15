import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './components/angular/angular.component';
import { BeansComponent } from './components/beans/beans.component';
import { FlowersComponent } from './components/flowers/flowers.component';
import { StarWarsComponent } from './components/star-wars/star-wars.component';

export const appRoutes: Routes = [
  { path: '', component: AngularComponent },
  { path: 'beans', component: BeansComponent },
  { path: 'flowers', component: FlowersComponent },
  { path: 'star-wars', component: StarWarsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
