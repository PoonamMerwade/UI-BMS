import { Component, OnInit, Input } from '@angular/core';
import { Fund } from '../model/fund';
import { FundService } from '../service/fund.service';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css']
})
export class FundComponent implements OnInit {

  fund:Fund;
  funds={}
  @Input()
  userName: String;

  @Input()
  customer:Customer;
  constructor(private fundService:FundService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getTransaction();
  }

  getTransaction(){
    this.userName=this.route.snapshot.params.userName;
    this.fundService.getFundTrasaction(this.userName).subscribe(data=>{
      this.funds=data;
    })
  }

}
