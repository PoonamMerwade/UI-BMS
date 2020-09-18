import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {CustomerService} from '../service/customer.service';
import { HttpClientModule } from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  // var PAN: String;
  // var password: String;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,HttpClientModule,Router],
      declarations: [ LoginComponent, NgForm ],
      providers:[CustomerService]
    })
    .compileComponents();

    // PAN:"Poonam";
    // password:"Poonam@123";
  }));

  

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


// it('entering valid inputs - Success',()=>{
   
//   expect(PAN).toMatch('ABCDE1234Z');
//   expect(password).toMatch('poonam@123');

// }); 
// it('entering valid inputs - Failure',()=>{
 
//   expect(PAN).not.toBe('Pooh');
//   expect(password).not.toBe('pooh121');

// });