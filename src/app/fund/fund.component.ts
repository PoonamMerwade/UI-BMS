import { Component, OnInit, Input } from '@angular/core';
import { Fund } from '../model/fund';
import { FundService } from '../service/fund.service';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css']
})
export class FundComponent implements OnInit {

  fund:Fund;
  funds={}
  @Input() customer:Customer;
  public userName: String;
  msg: string;

  constructor(private fundService:FundService) { }

  ngOnInit(): void {
    this.userName=window.localStorage.getItem('userName');
    let resp = this.fundService.getFundTrasaction();
    resp.subscribe((data) =>{this.funds= data;
      console.log('fund',data)
  },
  error=>{
    console.log("Exception occured");
    this.msg="No fund invested";
  }
  
  );
  }
  }

