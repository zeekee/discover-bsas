import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Components
import { SiteComponent } from './components/site/site.component'
import { HomeComponent } from './components/home/home.component'
import { NorthRouteComponent } from './components/north-route/north-route.component'
import { NorthRouteTwoComponent } from './components/north-route-two/north-route-two.component'
import { EastRouteComponent } from './components/east-route/east-route.component'
import { EastRouteTwoComponent } from './components/east-route-two/east-route-two.component'
import { WestRouteComponent } from './components/west-route/west-route.component'
import { WestRouteTwoComponent } from './components/west-route-two/west-route-two.component'
import { SouthRouteComponent } from './components/south-route/south-route.component'
import { SouthRouteTwoComponent } from './components/south-route-two/south-route-two.component'

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
  },
  {
    path: 'east-route',
    component: EastRouteComponent
  },
  {
    path: 'east-route-two',
    component: EastRouteTwoComponent
  },
  {
    path: 'west-route',
    component: WestRouteComponent
  },
  {
    path: 'west-route-two',
    component: WestRouteTwoComponent
  },
  {
    path: 'south-route',
    component: SouthRouteComponent
  },
  {
    path: 'south-route-two',
    component: SouthRouteTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
