import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PizzaStatusComponent } from './pizza-status/pizza-status.component';
import { CreateOrderComponent } from './create-order/create-order.component';

import { FlavorService } from './service/flavor.service';
import { DataValidatorService } from './service/data-validator.service'


@NgModule({
  declarations: [
    AppComponent,
    PizzaStatusComponent,
    CreateOrderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    FlavorService,
    DataValidatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
