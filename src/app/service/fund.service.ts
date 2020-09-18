import { Injectable } from '@angular/core';
import { Fund } from '../model/fund';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FundService {

  userName:string = window.localStorage.getItem('userName');
  private baseUrl="http://localhost:9191/fund"
  
  fund:Fund[];
  constructor(private http:HttpClient) { }

  getFundTrasaction(): Observable<Fund> {
    return this.http.get<Fund>(`${this.baseUrl}/getFund/${this.userName}`).pipe(map((fund:any)=>fund));
    // return this.http.get<any>(this.baseUrl+ "/getFund/"+ this.userName);
  }
  addFund(fund:Fund): Observable<any> {
    return this.http.post<any>(this.baseUrl+"/add",fund);
  }

  updateFund(fund: Fund): Observable<Fund>{
    return this.http.put<Fund>(this.baseUrl+"/update", fund);
  }
}
