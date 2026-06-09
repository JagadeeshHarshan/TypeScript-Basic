// let numbers = [10,20,30];

// numbers.forEach((num,i) => {
//     console.log(`index ${i} = ${num} `);
// });

// let prices =[100,200,300];
// let gstprices = prices.map(price => price/2);
// // console.log(gstprices);

// let students = [
//     {name: "Jhon" , marks: 80, regno:1, result: "pass", grade: 'A'},
//     {name: "sara" , marks: 90, regno: 2, result:"pass", grade: 'S'},
//     {name:"Harshu" , marks: 95, regno:3, result: "Pass", grade:"s"}
// ];
// let names = students.map(s => s.name);
// let marks = students.map(s => s.marks);
// let regno = students.map(s => s.regno);
// let result = students.map(s =>s.regno);
// let grade = students.map(s =>s.grade);
// console.log(names, marks,regno,result,grade);


// let marks=[38,48,50,40,80,90,28];
// let passed=marks.filter(m => m>=40);
// console.log(passed);

// let nums: number[] = [1,2,3,4,5,6,7,8];
// let evens: number[] = nums.filter( n => n % 2 === 0);
// console.log(evens);


let employees = [
    { name: "Mr Jaga", role: "Developer"}, 
    { name: "Mr Harshan", role: "Tester"},
    { name: "Mr Yugesh", role: "Manager"},
    { name: "Mr Shiva", role: "Developer"}   
];
let Developer = employees.filter(emp => emp.role === "Developer");

console.log(Developer);
