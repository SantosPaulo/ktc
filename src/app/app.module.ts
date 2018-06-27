import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppRootComponent } from './app-root/app-root.component';
import { CultureComponent } from './culture/culture.component';

@NgModule({
  declarations: [
    AppRootComponent,
    CultureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppRootComponent]
})
export class AppModule { }
