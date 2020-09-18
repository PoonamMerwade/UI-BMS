import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { AccountComponent } from './account/account.component';
import { FundComponent } from './fund/fund.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
// import { HttpModule } from '@angular/common/http';
import { HttpClientModule} from '@angular/common/http';
import { CustomerService } from './service/customer.service';
import { AccountService } from './service/account.service';
import {ViewAccountComponent} from './account/view-account/view-account.component';
import {ViewCustomerComponent} from './customer/view-customer/view-customer.component'
import {FundService} from './service/fund.service';
import { LogoutComponent } from './logout/logout.component';
import { AddFundComponent } from './fund/add-fund/add-fund.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AccountComponent,
    FundComponent,
    LoginComponent,
    DashboardComponent,
    ViewCustomerComponent,
    ViewAccountComponent,
    LogoutComponent,
    AddFundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CustomerService,
    AccountService,
    FundService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
