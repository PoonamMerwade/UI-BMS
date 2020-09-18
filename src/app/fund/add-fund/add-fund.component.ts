import { Component, OnInit, Input } from '@angular/core';
import { Fund } from 'src/app/model/fund';
import { ActivatedRoute, Router } from '@angular/router';
import { FundService } from 'src/app/service/fund.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-add-fund',
  templateUrl: './add-fund.component.html',
  styleUrls: ['./add-fund.component.css']
})
export class AddFundComponent implements OnInit {

  fund:Fund;
  msg:string;
  isNew:boolean;

  @Input() 
  public userName:String;
  
  constructor(private actRoute: ActivatedRoute,
    private router: Router,
    private fundService: FundService) { }
  
  ngOnInit() {
    let userName = this.actRoute.snapshot.params.userName;
    if(userName){
      this.isNew = false;
      this.fundService.getFundTrasaction().subscribe(
        (data)=>{
          this.fund=data;
        }
      );
    }else{
      this.isNew = true;
      this.fund={
        "fundId":null,
        "fundName":"",
        "transactionAmount":"",
        "accountNumber":"",
        "investmentAmount":"",
        "customer":{
          "firstName":"",
          "lastName":"",
          "userName":"",
          "password":"",
          "emailId":"",
          "phoneNumber":"",
          "dob":null,
          "fund":[],
          "account":[]
        }
      }
    }
  }
  save(){
    let ob: Observable<Fund>;
      if(this.isNew){
        ob = this.fundService.addFund(this.fund);
      }else{
        ob = this.fundService.updateFund(this.fund);
      }
      ob.subscribe(
        (data)=>{
          alert('fUND DETAILS ADDED SUCCESSFULLY....');
          this.router.navigateByUrl("/fund");
        },
        (errResponse)=>{
          this.msg = errResponse.error;
        }
      );
  }
}
