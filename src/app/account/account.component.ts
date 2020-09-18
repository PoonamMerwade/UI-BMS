import { Component, OnInit, Input, Output } from '@angular/core';
import { Account } from '../model/account';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import{ AccountService} from '../service/account.service'
import { Customer } from '../model/customer';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  account: Account;
  msg:string;
  isNew:boolean;

  @Input() 
  public userName:String;
  
  constructor(private actRoute: ActivatedRoute,
    private router: Router,
    private accountService: AccountService) { }

  ngOnInit() {
    let userName = this.actRoute.snapshot.params.userName;
    if(userName){
      this.isNew = false;
      this.accountService.getAccountByUserName().subscribe(
        (data)=>{
          this.account=data;
        }
      );
    }else{
      this.isNew = true;
      this.account = {
        "bankId":null,
        "bankName":"",
        "accountNumber":"",
        "ifscCode":"",
        "micrCode":"",
        "customer":{
          "firstName":"",
          "lastName":"",
          "userName":"",
          "password":"",
          "emailId":"",
          "dob":null,
          "phoneNumber":"",
          "account":[],
          "fund":[]
          }
        }
      }
    }
save(){
  let ob: Observable<Account>;
    if(this.isNew){
      ob = this.accountService.addAccount(this.account);
    }else{
      ob = this.accountService.updateAccount(this.account);
    }
    ob.subscribe(
      (data)=>{
        alert('ACCUONT DETAILS ADDED SUCCESSFULLY....');
        this.router.navigateByUrl("/account");
      },
      (errResponse)=>{
        this.msg = errResponse.error;
      }
    );
}
}
