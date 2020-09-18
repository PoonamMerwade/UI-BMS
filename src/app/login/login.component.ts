import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgForm, FormGroup,FormBuilder, Validators} from '@angular/forms';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../model/customer'
import { InvokeFunctionExpr } from '@angular/compiler';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

msg="";
@Input()
  public userName:String;
  data:any;
  public customer:Customer=new Customer();

// @Input()
// public customer:Customer=new Customer();
//  @Input() userName: String;

  constructor(private service :CustomerService,private router:Router){}

  ngOnInit(){}

  loginUser(){
    this.service.loginUserFromRemote(this.customer).subscribe(
      data=>{
        window.localStorage.setItem("userName", data.userName);
        console.log("Response Received");
        this.router.navigate(['/customer'])
      },
      error=>{
        console.log("Exception occured");
        this.msg="Bad Credentials please enter valid Pan and password";
      }
    )
  }
  
  // :void{
  //   this.loginForm = this.formBuilder.group({
  //     username: ['', [Validators.required]],
  //     password: ['', [Validators.required]],
    // }
    // );

  // }
  // onSubmit() {
  //   if (this.loginForm.invalid) {
  //     return;
  //   }
  //   const loginPayload = {
  //     username: this.loginForm.controls.username.value,
  //     password: this.loginForm.controls.password.value

  //   }
  //   this.service.loginUserFromRemote(this.customer).subscribe(
  //     data=>{
  //     if(data.status==200){
  //       window.localStorage.setItem('userName', data.result.username);
  //       if (this.invalidLogin = false) {
  //         this.showSpinner = true;
  //         setTimeout(() => {
  //           this.showSpinner = false;
  //         }, 10000);
  //       }
  //       this.router.navigate(['/home'])}
  //    else{
  //     this.invalidLogin = true;
  //     alert(data.message);
  //   }
  //    }
  //   );
  // }
  // onLoadData() {
  //   this.showSpinner = true;
  //   setTimeout(() => {
  //     this.showSpinner = false;
  //   }, 50000);
  // }
  
}
