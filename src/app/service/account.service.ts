import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../model/account';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  userName:string = window.localStorage.getItem('userName');
  private baseUrl="http://localhost:9191/account";

  // customer:Customer;

  account:Account[];
  constructor(private http:HttpClient) { }

  getAccountByUserName():Observable<Account>{
    return this.http.get<Account>(`${this.baseUrl}/getAccount/${this.userName}`).pipe(map((account:any)=>account));
  }

  addAccount(account:Account): Observable<any> {
    return this.http.post<any>(this.baseUrl+"/add",account);
  }

  updateAccount(account:Account):Observable<Account>{
    return this.http.put<Account>(this.baseUrl+"/update",account);
  }
}
