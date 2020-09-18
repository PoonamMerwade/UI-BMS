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

  public userName:String;

  @Input() customer:Customer;
  
  account:Account;
  accounts={}
  msg: string;

  constructor(private accountService:AccountService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.userName=window.localStorage.getItem('userName');
    let resp = this.accountService.getAccountByUserName();
    resp.subscribe((data) =>{this.accounts= data;
      console.log('account',data)
    },
    error=>{
      console.log("Exception occured");
      this.msg="No account found";
    }
    
    );
  }
}
  // ViewAccount(){
  //   this.userName=this.customer['userName'];
  //   this.accountService.getAccountByUserName(this.userName).subscribe(data=>{
  //     this.accounts=data;
  //   })
  // }


