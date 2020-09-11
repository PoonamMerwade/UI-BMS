import { Customer } from './customer';

export class Fund {
    public fundId:number;
    public fundName:String;
    public transactionAmount:BigInteger;
    public accountNumber:String;
    public investmentAmount:BigInteger;
    public customer:Customer;
}

