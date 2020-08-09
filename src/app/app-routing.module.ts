import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Components
import { SiteComponent } from './components/site/site.component'
import { HomeComponent } from './components/home/home.component'
import { NorthRouteComponent } from './components/north-route/north-route.component'
import { NorthRouteTwoComponent } from './components/north-route-two/north-route-two.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'site',
    component: SiteComponent
  },
  {
    path: 'north-route',
    component: NorthRouteComponent
  },
  {
    path: 'north-route-two',
    component: NorthRouteTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }