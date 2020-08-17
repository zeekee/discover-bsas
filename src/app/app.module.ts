import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteComponent } from './components/site/site.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { NorthRouteComponent } from './components/north-route/north-route.component';
import { NorthRouteTwoComponent } from './components/north-route-two/north-route-two.component';
import { EastRouteComponent } from './components/east-route/east-route.component';
import { EastRouteTwoComponent } from './components/east-route-two/east-route-two.component';
import { WestRouteComponent } from './components/west-route/west-route.component';
import { WestRouteTwoComponent } from './components/west-route-two/west-route-two.component';
import { SouthRouteComponent } from './components/south-route/south-route.component';
import { SouthRouteTwoComponent } from './components/south-route-two/south-route-two.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    NorthRouteComponent,
    NorthRouteTwoComponent,
    EastRouteComponent,
    EastRouteTwoComponent,
    WestRouteComponent,
    WestRouteTwoComponent,
    SouthRouteComponent,
    SouthRouteTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
