class Bank{
    constructor(credit,debit) {
        this.credit=credit;
        this.debit=debit;
    }

    getInfo()
    {
        return `${this.credit},${this.debit}`;
    }

    sendMoney()
    {
        console.log("customer can send money to another bank");
    }
}

class SBIBank extends Bank
{
    constructor(credit,debit,transfermoney) {
        super(credit,debit);
        this.transfermoney=transfermoney;    
    }
    loan()
    {
        console.log("Customer can get the loan");
    }
}

 const sbibank=  new SBIBank("Money C","money D", "Cust Tra");

 console.log(sbibank.getInfo());
 sbibank.loan();
 