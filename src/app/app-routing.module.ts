import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
// import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';
import {ViewAccountComponent} from './account/view-account/view-account.component';
import {ViewCustomerComponent} from './customer/view-customer/view-customer.component'
import { CustomerComponent } from './customer/customer.component';
import { AccountComponent } from './account/account.component';
// import { ViewaccountComponent } from './viewaccount/viewaccount.component';
import { FundComponent } from './fund/fund.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"home",component:DashboardComponent},
  {path:"logout",component:LogoutComponent},
  {path:'customer/:userName',component:ViewCustomerComponent},
  {path:"addcustomer",component:CustomerComponent},
  {path:"addaccount",component:AccountComponent},
  {path:'account/:userName',component:ViewAccountComponent},
  {path:'fund/:userName',component:FundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
