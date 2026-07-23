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
//         console.log("Student Name is:", this.studentName);
//         console.log("Student rollNumber is:", this.rollNumber);
        
//     }
//     showAge() {
//         if (this.age >= 18 )
//         console.log("age eligible to write:",this.age);
//     }
// }
// const student1 = new Student("Harshu", 90,25);
// student1.showDetails();
// student1.showAge();
// console.log("studentName:", student1.studentName);

//-----------------------------------------------------

// class Account {
//     private balance: number;

//     constructor(initialBalance: number) {
//         this.balance = initialBalance; 
//     }
//     deposit(amount:number){
//         this.balance += amount;
//     }
//     getBalance(): number{
//         return this.balance;
//     }
// }
// const account = new Account(10000);
// account.deposit(5000);
// console.log("current Balance:", account.getBalance());

// let task1 = "Task 1";
// let task2 = "Task 2";
// let task3 = "Task 3";

// console.log(task1);
// console.log(task2);
// console.log(task3);

// function login1(): void{
//     validateUser1();
// }
// function validateUser1(): void{
//     console.log("user valid");
// }
// login1();

// function login2(): void{
//     validateUser2();
// }
// function validateUser2(): void{
//     console.log("user validated");
// }
// login2();


function login1(): void{
    jagaValidateUser1();
}
function jagaValidateUser1(): void{
    console.log("jaga valid user");
}
login1();

function login2(): void{
    harshuvalidateUser2();
}
function harshuvalidateUser2(): void{
    console.log("Harshu valid user");
}
login2();
