import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customer: Customer;

  private baseUrl="http://localhost:9191/customer";
  
  constructor(private http:HttpClient) { 

  }
  public loginUserFromRemote(customer:Customer):Observable<any>{
    return this.http.post<any>("http://localhost:8081/login",customer);
  }

  getCustomerByUserName(userName:String): Observable<Customer> {
    // return this.http.get<Customer>(`${this.baseUrl}/getCustomer/$userName}`);
    return this.http.get<Customer>(this.baseUrl+ "/getCustomer/"+ userName);
  }

  addCustomer(customer:Customer): Observable<Customer> {
    return this.http.post<Customer>(this.baseUrl+"/Register",customer);
  }

  updateCustomerByUserName(customer: Customer): Observable<Customer>{
    return this.http.put<Customer>(this.baseUrl+"/update", customer);
  }
  
    deleteCustomerByUserName(userName:String): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${userName}`, { responseType: 'text' });
  }


}
