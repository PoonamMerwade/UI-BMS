import { Component, OnInit, Input } from '@angular/core';
// import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/model/customer';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  
  @Input()
  public userName:String;
  data:any;
  // customer:Customer[];
  customer=new Customer();
  customers={};
  

  constructor(private customerService:CustomerService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.viewCustomer();
  }

  viewCustomer(){
    // this.userName=this.route.snapshot.params.userName;
    this.userName=this.customer['userName']
    console.log(this.userName);
    this.customerService.getCustomerByUserName(this.userName).subscribe(data=>{
    this.customers=data;
      //  console.log(data);
  })
  }
}
