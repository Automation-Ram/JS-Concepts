class bank{

    static pan_num=12345;
    constructor(credit,debit)
    {
        this.credit=credit;
        this.debit=debit;
    }



    static branch()
    {
        console.log("common branch");
    }
    sendmoney()
    {
        console.log("Customer can sen money");
    }

}

const ban=  new bank("Money C","MOney D");
console.log(bank.pan_num);
bank.branch();
ban.sendmoney();


