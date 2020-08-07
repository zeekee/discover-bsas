import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Components
import { SiteComponent } from './components/site/site.component'
import { HomeComponent } from './components/home/home.component'

const routes: Routes = [
  {
    path: 'site',
    component: SiteComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
