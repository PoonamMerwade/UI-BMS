import { Component, OnInit, Input } from '@angular/core';
import { Account } from 'src/app/model/account';
import { AccountService } from 'src/app/service/account.service';
import { Customer } from 'src/app/model/customer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})
export class ViewAccountComponent implements OnInit {

  @Input()
  public userName:String;

  @Input()
  customer=new Customer();

  account:Account;
  accounts={}
  // userName: any;
  constructor(private accountService:AccountService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.ViewAccount();
  }

  ViewAccount(){
    // this.userName=this.account.customer['userName'];
    this.userName=this.route.snapshot.params.userName;
    // console.log(this.account.customer.userName);
    this.accountService.getAccountByUserName(this.userName).subscribe(data=>{
      this.accounts=data;
    })
  }

}
