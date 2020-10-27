import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { TaskService } from './task.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/public_api';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, AddProductsComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    
  ],

  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
