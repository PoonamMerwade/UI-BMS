import { Component, OnInit } from '@angular/core';
import {Customer} from '../model/customer'
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {CustomerService} from '../service/customer.service'


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  
  customer: Customer;
  msg:string;
  isNew:boolean;
  constructor(private actRoute: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService) { }

  ngOnInit() {
    let userName = this.actRoute.snapshot.params.userName;
    if(userName){
      this.isNew = false;
      this.customerService.getCustomerByUserName(userName).subscribe(
        (data)=>{
          this.customer=data;
        }
      );
    }else{
      this.isNew = true;
      this.customer = {
        "firstName":"",
        "lastName":"",
        "userName":"",
        "password":"",
        "emailId":"",
        "dob":null,
        "phoneNumber":"",
        "account":[],
        "fund":[],
       }
    }
  }
  save(){
    let ob: Observable<Customer>;
    if(this.isNew){
      ob = this.customerService.addCustomer(this.customer);
    }else{
      ob = this.customerService.updateCustomerByUserName(this.customer);
    }
    ob.subscribe(
      (data)=>{
        this.router.navigateByUrl("/home");
      },
      (errResponse)=>{
        this.msg = errResponse.error;
      }
    );
}
}