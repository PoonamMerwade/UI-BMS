import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../model/account';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  // [x: string]: any;
  private baseUrl="http://localhost:9191/account";

  customer:Customer;

  account:Account;
  constructor(private http:HttpClient) { }

  getAccountByUserName(userName:String):Observable<Account>{
    return this.http.get<Account>(this.baseUrl+"/getAccount/"+ userName);
  }

  addAccount(account:Account): Observable<any> {
    return this.http.post<any>(this.baseUrl+"/add",account);
  }

  updateAccount(account:Account):Observable<Account>{
    return this.http.put<Account>(this.baseUrl+"/update",account);
  }
}
