// class Car {
//     brand: string;
//     model: string;

//     constructor(brand: string, model: string) {
//         this.brand = brand;
//         this.model = model;
//     }

//     start() {
//         console.log(this.brand + " is starting");
//     }

//     displayDetails() {
//         console.log("Car Brand:", this.brand);
//         console.log("Car Model:", this.model);
//     }
// }

// const car1 = new Car("TATA", "HARRIER");

// car1.displayDetails();
// car1.start();

// class Student {
//     name: string;
//     marks: number;

//     constructor(name: string,marks: number) {
//         this.name = name;
//         this.marks = marks;
//     }
//     displayDetails() {
//         console.log("Student Name:" , this.name);
//         console.log("Student Marks:" , this.marks);
//     }

// }
// ---------------------------------------------------------------------------------------------------------


// const student1 = new Student("Jaga", 79);

// student1.displayDetails();


// class Student {
//     public studentName: string;
//     public rollNumber: number;
//     private age: number;

//     constructor(studentName:string, rollNumber: number, age: number) {
//         this.studentName = studentName;
//         this.rollNumber = rollNumber;
//         this.age = age;
//     }
//     showDetails() {
//         console.log("Student Name:", this.studentName);
//         console.log("Student rollNumber:", this.rollNumber);
        
//     }
//     showAge() {
//         console.log("age:",this.age);
//     }
// }
// const student1 = new Student("Harshu", 90,25);
// student1.showDetails();
// student1.showAge();
// console.log("studentName:", student1.studentName);
//--------------------------------------------------------------------------------------------------------

    
// class BankAccount {
//     AccountNumber: number;
//     AccountName: string;
//     Balance: number;


//     constructor(AccountNumber: number , AccountName: string , Balance: number) {
//         this.AccountNumber = AccountNumber;
//         this.AccountName = AccountName;
//         this.Balance = Balance;
    

//     }
//     displayDetails(){
//         console.log("AccountNumber:" , this.AccountNumber);
//         console.log("AccountName:"  , this.AccountName);
//         console.log("Balance:" , this.Balance);
//     }
//     deposit() {
//         console.log(this.AccountName + "Deposited money:");
    
//     }
//     checkBalance() {
//         console.log("Balance:" + this.Balance );
    
//     }
// }
// class SavingsAccount extends BankAccount {
//     addInterest() {
//         console.log("interest added ");
//     }
// }
// class CurrentAccount extends BankAccount {
//     withdraw() {
//         console.log(this.AccountName + "withDraw money:");

//     }
// }
// const savings = new SavingsAccount (
//     20001,
//     "Harshu",
//     20000
// );
// console.log("savings.addinterest");
// const current = new CurrentAccount (
//     20002,
//     "Jaga",
//     30000
// );
// current.deposit();
// current.withdraw();
// current.checkBalance();
//---------------------------------------------------------------------------------------------------------



// class employee { 
//     work () {

//     console.log("employee is working");
//     } 
// }
// class Developer extends employee {
//     work() {
//         console.log("Developer is writing code");
//     }
// }
// class Tester extends employee {
//     work() {
//         console.log("tester is testing application");
//     }
// }
// class Manager extends employee {
//     work() {
//         console.log("manager is conducting team meeting");
//     }
// }
// const developer = new Developer();
// const tester = new Tester();
// const manager = new Manager ();

// developer.work();
// tester.work();
// manager.work();

//---------------------------------------------------------------------------------

class BankAccount {
    calculateInterest () {
        console.log("calculating interest");
    }
}
class SavingsAccount extends BankAccount{
    calculateInterest () {
        console.log("savings account interest : 5%");
    }
}
class CurrentAccount extends BankAccount{
    calculateInterest () {
        console.log("current account interest: 2%");
    }
}
class FixedDeposit extends BankAccount{
    calculateInterest() {
        console.log("Fixed Deposit interest: 8%");
    }
}

const Savings = new SavingsAccount();
const Current = new CurrentAccount();
const FixedD = new FixedDeposit();

Savings.calculateInterest();
Current.calculateInterest();
FixedD.calculateInterest();

