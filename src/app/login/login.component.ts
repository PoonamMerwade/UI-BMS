import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import {AuthenticationService} from '../service/authentication.service';
import {NgForm} from '@angular/forms';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../model/customer'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
msg="";
customer= new Customer();

  constructor(private service :CustomerService,private router:Router){}

  ngOnInit(){

  }
  loginUser(){
    this.service.loginUserFromRemote(this.customer).subscribe(
      // this.service.loginUserFromRemote(this.customer).subscribe(
      data=>{
        // window.localStorage.setItem("userName",data.result.customer)
        console.log("Response Received");
        this.router.navigate(['/home'])
      },
      error=>{
        console.log("Exception occured");
        this.msg="Bad Credentials pleass enter valid Pan and password";
      }
    )
  }
  
}
