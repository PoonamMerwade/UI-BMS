import { TestBed, async, inject } from '@angular/core/testing';

import { CustomerService } from './customer.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Customer } from '../model/customer';

describe('CustomerService', () => {
  let service: CustomerService;
  let httpMock:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
      ],
      providers:[
        CustomerService
      ]
    });
    service = TestBed.inject(CustomerService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it(`should post details`,async(inject([HttpTestingController, CustomerService],
    (httpClient: HttpTestingController, service: CustomerService) => {
      const postItem = [
        {
          "PAN": "ABCDE1234Z",
          "password": "poonam@123",
        },
        {
          "PAN": "DDLJA7898Z",
          "password": "pooja@345",
        },
      ];

      service.loginUserFromRemote(new Customer).subscribe((posts:any)=>{
        expect(posts.length).toBe(2);
      });

      let req = httpMock.expectOne('http://localhost:8081/login');
      expect(req.request.method).toBe("POST");

      req.flush(postItem);
      httpMock.verify();
       } )))


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
