import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TbGeolocLibModule } from 'tb-geoloc-lib';
import { TbDropfileLibModule } from 'tb-dropfile-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TbGeolocLibModule,
    TbDropfileLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
