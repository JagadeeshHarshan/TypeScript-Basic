//NORMAL FUNCTIONS

// let a: number = 10
// let b: number = 2
// function boolean(a:true, b:false): boolean{
// if  (a > b) {
//     return true;
// } else {
//     return false; 
// }
// }

// console.log ("Result:", boolean(true, false));

// function boolean(a: string, b: string): string {
//     if (a = b) {
//         return "true";
//     } else {
//         return "false";
//     }
// }

// console.log("Result:", boolean("jagu", "harshu"));

//ANONYMOUS Function
// let multiply(a:number, b:number): number{
//     return a*b
// }

// console.log ("Result:", multiply(3,2));

// ARROW FUNCTION
//  const greet = (name : string, ): string => {
//     return "Hello Harshanfriend:" + name  ;
//  }
// console.log(greet("jaga"));

//Default parameter function

// function greet(name: string = "Guest" ): string {
//     return `Hello, ${name}`;
// }
// console.log(greet());
// console.log(greet("jaga"));

// Optional parameter 

// function fullname(firstName: string, lastName?: string): string {
//   return lastName ?`${firstName} {lastName}` : firstName;
// }
// console.log(fullname("jagadeesh"));
// console.log(fullname("jagadeesh", "Harshan"));


// function fullname(firstName: string, lastName?: string): string {
//     return lastName ? `${firstName} ${lastName}` : firstName;
// }
// console.log(fullname("jagadeesh"));
// console.log(fullname("jagadeesh", "Harshan"));

//Rest Parameter functions

// function total(...numbers: number[]): number{
//     return numbers.reduce((acc, curr) => acc + curr, 0);
// }
// console.log(total(2,4,3));
// console.log(total(20,22,28));

// Recursive functions

// function factorial(n :number): number{
//     if(n === 0 || n === 1) { 
//         return 1;
// }

//     return n * factorial (n-1);
//}
//console.log(factorial(5));

// function sub(n: number): number{
    
//     if (n === 1) {
//         return 1;
//     }
//     return n - sub(n - 1);
// } 
// console.log(sub(5));

function checkEvenOdd(n: number): void{
    for (let i = 1; i <= n; i++) {
        if (i % 2 ===0) {
            console.log(i +  "is Even");
        } else{
            console.log (i +   "is odd");
        }
    }
}
console.log (checkEvenOdd(10));


//using boolean

function isEven(n: number): boolean {

    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }

}

for (let i = 1; i <= 10; i++) {

    if (isEven(i)) {
        console.log(i + " is Even");
    } else {
        console.log(i + " is Odd");
    }

}

// math.fun

// function isPerfectSquare(n: number): boolean {

//     let root = Math.sqrt(n);
//     if (root === Math.floor(root)) {
//         return true;
//     } else {
//         return false;
//     }
// }
// for (let i = 1; i <= 10; i++) {

//     if (isPerfectSquare(i)) {
//         console.log(i + " is a Perfect Square");
//     } else {
//         console.log(i + " is Not a Perfect Square");
//     }

// }