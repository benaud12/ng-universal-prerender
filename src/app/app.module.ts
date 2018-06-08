import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { AngularComponent } from './components/angular/angular.component';
import { BeansComponent } from './components/beans/beans.component';
import { FlowersComponent } from './components/flowers/flowers.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    BeansComponent,
    FlowersComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
