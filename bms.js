// const { browser } = require("protractor");
// const { exception } = require("console");

const { browser } = require("protractor");

describe("Login Testing",function(){
    it("Login with Credentials",function(){
        browser.get('http://localhost:4200/login');
       
        browser.driver.manage().window().maximize()
        browser.driver.sleep(2000)
        browser.findElement(by.css('input#username')).sendKeys("BNYMN4567V")
        browser.findElement(by.css('input#password')).sendKeys("Manju@123")
        browser.sleep(1000)
        browser.findElement(by.css('button')).click();
           
    });
    
    it("Adding the customer",function(){
        browser.driver.getTitle().then(function(pageTitle){
            expect(pageTitle).toEqual('BankManagementUI')
        })
        browser.get('http://localhost:4200/addcustomer');
        browser.element(by.css('input[name="FirstName"]')).sendKeys("Manjula");
        browser.element(by.css('input[name="LastName"]')).sendKeys("Merwade");
        browser.element(by.css('input[name="Username"]')).sendKeys("BNYMN4567V");
        browser.element(by.css('input[name="Password"]')).sendKeys("Manju@123");
        browser.element(by.css('input[name="VendorEmailId"]')).sendKeys("manju@gmail.com");
        browser.element(by.css('input[name="DOB"]')).sendKeys("10/05/1970")
        browser.element(by.css('input[name="phoneNumber"]')).sendKeys("9900887656");
        browser.element(by.css('button')).click(); 
    });

    it("View Customer",function(){
        browser.get("http://localhost:4200/customer");
        browser.sleep(4000);
        browser.element(by.css('th:nth-of-type(1)'));
        browser.element(by.css('th:nth-of-type(2)'));
        browser.element(by.css('th:nth-of-type(3)'));
        browser.element(by.css('th:nth-of-type(4)'));
        browser.element(by.css('th:nth-of-type(5)'));
        browser.element(by.css('th:nth-of-type(6)'));
    });

    it("Adding bankAccount",function(){
        browser.get('http://localhost:4200/addaccount');
        browser.sleep(1000);
        browser.element(by.css('input[name="Username"]')).sendKeys("BNYMN4567V");
        browser.element(by.css('input[name="BankName"]')).sendKeys("SBI");
        browser.element(by.css('input[name="AccountNumber"]')).sendKeys("9988877654");
        browser.element(by.css('input[name="IFSC"]')).sendKeys("SBII0786500");
        browser.element(by.css('input[name="MICR"]')).sendKeys("9976543249");
        browser.element(by.css('button')).click();
    });

    it("Adding Fund details",function(){
        browser.get('http://localhost:4200/addfund');
        browser.sleep(1000);
        browser.element(by.css('input[name="username"]')).sendKeys("BNYMN4567V");
        browser.element(by.css('input[name="FundName"]')).sendKeys("MNS fund");
        browser.element(by.css('input[name="AccountNumber"]')).sendKeys("9988877654");
        browser.element(by.css('input[name="TrasactionAmount"]')).sendKeys("9000");
        browser.element(by.css('input[name="InvestmentAmount"]')).sendKeys("800");
        browser.element(by.css('button')).click();
    });

    it("Viewing account details",function(){
        browser.get('http://localhost:4200/account');
        browser.sleep(4000);
        browser.element(by.css('th:nth-of-type(1)'));
        browser.element(by.css('th:nth-of-type(2)'));
        browser.element(by.css('th:nth-of-type(3)'));
        browser.element(by.css('th:nth-of-type(4)'));
    });

    it("Viewing fund details",function(){
        browser.get('http://localhost:4200/fund');
        browser.sleep(4000);
        browser.element(by.css('td:nth-of-type(1)'));
        browser.element(by.css('th:nth-of-type(2)'));
        browser.element(by.css('th:nth-of-type(3)'));
        browser.element(by.css('th:nth-of-type(4)'));
    });

    it("Logging out",function(){
        browser.findElement(by.css('link')).click(); 
    });
})