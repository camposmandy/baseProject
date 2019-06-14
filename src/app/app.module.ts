import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppBaseComponent } from './base/base.component';
import { AppCardComponent } from './card/app-card.component';
import { AppListaSonoComponent } from './lista-sono/app-lista-sono.component';
import { TextComponent } from './text/text.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { ImageLoaderService } from './services/image-loader/image-loader.service';

@NgModule({
  declarations: [
    AppBaseComponent,
    AppCardComponent,
    AppListaSonoComponent,
    TextComponent,
    AccessibilityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ImageLoaderService
  ],
  bootstrap: [AppBaseComponent]
})
export class AppModule { }
