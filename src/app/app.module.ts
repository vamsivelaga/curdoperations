import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TotalListComponent } from './total-list/total-list.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalListComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
