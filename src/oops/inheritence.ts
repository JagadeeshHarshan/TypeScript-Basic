  class BankAccount {
    AccountNumber: number;
    AccountName: string;
    Balance: number;


    constructor(AccountNumber: number , AccountName: string , Balance: number) {
        this.AccountNumber = AccountNumber;
        this.AccountName = AccountName;
        this.Balance = Balance;
    

    }
    displayDetails(){
        console.log("AccountNumber:" , this.AccountNumber);
        console.log("AccountName:"  , this.AccountName);
        console.log("Balance:" , this.Balance);
    }
    deposit() {
        console.log(this.AccountName + "Deposited money:");
    
    }
    checkBalance() {
        console.log("Balance:" + this.Balance );
    
    }
}
class SavingsAccount extends BankAccount {
    addInterest() {
        console.log("interest added ");
    }
}
class CurrentAccount extends BankAccount {
    withdraw() {
        console.log(this.AccountName + "withDraw money:");

    }
}
const savings = new SavingsAccount (
    20001,
    "Harshu",
    20000
);
console.log("savings.addinterest");
const current = new CurrentAccount (
    20002,
    "Jaga",
    30000
);
current.deposit();
current.withdraw();
current.checkBalance();
