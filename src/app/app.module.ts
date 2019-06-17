import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppBaseComponent } from './base/base.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ComponentClassModule } from './component-class/component-class.module';
import { ServiceClassModule } from './service-class/service-class.module';

@NgModule({
  declarations: [
    AppBaseComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentClassModule,
    ServiceClassModule
  ],
  bootstrap: [AppBaseComponent]
})
export class AppModule { }
