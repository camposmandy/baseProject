import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppBaseComponent } from './base/base.component';
import { ModuleOneModule } from './module-one/module-one.module';
import { ModuleTwoModule } from './module-two/module-two.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ComponentClassComponent } from './module-one/component-class/component-class.component';
import { BookModule } from './book/book.module';


@NgModule({
  declarations: [
    AppBaseComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModuleOneModule,
    ModuleTwoModule,
  ],

  exports: [
    AppBaseComponent,
    NotFoundComponent,
  ],

  bootstrap: [AppBaseComponent]
})
export class AppModule { }
