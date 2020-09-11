import { Injectable } from '@angular/core';
import { Fund } from '../model/fund';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FundService {

  constructor(private http:HttpClient) { }
  private baseUrl="http://localhost:9191/fund"

  getFundTrasaction(userName:String): Observable<any> {
    return this.http.get<any>(this.baseUrl+ "/getFund/"+ userName);
  }
}
