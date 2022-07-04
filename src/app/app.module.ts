import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassportInfoComponent } from './passportinfo.component';
import { PassportInfoServices } from './passportinfo.services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,PassportInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [PassportInfoServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
