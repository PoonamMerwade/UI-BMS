import { Fund } from './fund';
import { Account } from './account';

export class Customer {
    public firstName:String;
    public lastName:String;
    public userName:String;
    public password:String;
    public emailId:String;
    public dob:Date;
    public phoneNumber:String;
    public account:Account[];
    public fund:Fund[];

}
