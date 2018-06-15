import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { AngularComponent } from './components/angular/angular.component';
import { BeansComponent } from './components/beans/beans.component';
import { FlowersComponent } from './components/flowers/flowers.component';
import { StarWarsComponent } from './components/star-wars/star-wars.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    BeansComponent,
    FlowersComponent,
    StarWarsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({uri: 'https://graphql.github.io/swapi-graphql/'}),
      cache: new InMemoryCache(),
    });
  }
}
