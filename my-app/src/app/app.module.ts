import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { SalesDataService } from './sales-data.service';
import { InitCapsPipe } from './shared/init-caps.pipe';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    OrdersComponent,
    InitCapsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [SalesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
