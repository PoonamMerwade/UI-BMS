import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customer:Customer[];

  userName:string = window.localStorage.getItem('userName');
  
  private baseUrl="http://localhost:9191/customer";
  private baseUrl1="http://localhost:8081";
  
  constructor(private http:HttpClient) { 

  }
  // public loginUserFromRemote(customer:Customer):Observable<any>{
  //   return this.http.post<any>("http://localhost:8081/login",customer);
  // }

  public loginUserFromRemote(customer:Customer):Observable<any>{
    return this.http.post<any>(`${this.baseUrl1}/login`, customer);
  }

  getCustomerByUserName(): Observable<Customer> {
    return this.http.get<Customer>(`${this.baseUrl}/getCustomer/${this.userName}`).pipe(map((customer:any)=>customer));
  }

  addCustomer(customer:Customer): Observable<Customer> {
    this.userName = window.localStorage.getItem('userName');
    return this.http.post<Customer>(this.baseUrl+"/Register",customer);
  }

  updateCustomerByUserName(customer: Customer): Observable<Customer>{
    return this.http.put<Customer>(this.baseUrl+"/update", customer);
  }
}






  
  //   deleteCustomerByUserName(userName:String): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/delete/${userName}`, { responseType: 'text' });
  // }