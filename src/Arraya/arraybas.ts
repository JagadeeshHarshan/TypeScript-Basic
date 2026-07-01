// let nums: number[] = [1, 2, 3];
// let mixed: (string | number)[] = ["Hi",10];
// console.log(nums);
// console.log(mixed);

// using square brackets

// let mixed: (number | string)[] = [1, "two", 3, "ten"];
// console.log(mixed);

// let names: Array<string> = ["Jaga", "Harsha",];
// names.push("Saru");
// console.log(names)

// FOR EACH
// using basic
// let fruits = ["Ts", "Js","python"];
// fruits.forEach(fruits => {
//     console.log([fruits]);
// });

//using index
// let numbers = [10,20,30,40];
// numbers.forEach((num , i) => {
//     console.log(`index ${i} = ${num}`);
// });

// Total Caluculation

// let scores = [60, 70 ,90];
// let total = 0;
// scores.forEach(score => total += score);
// scores.forEach(score => `index ${2}`);
// console.log(total);
// console.log(scores[0]);

//ARRAY MAP METHOD
//squqre numbers

// let nums = [2,4,6];
// let squares =nums.map(n => n*n);
// console.log(squares);

//add GST
// let prices = [100,200,250];
// let gstprices = prices.map(price => price+price* 0.19);
// console.log(gstprices);
// map obj

// let students = [{name:"jaga",marks: 70},
//     {name:"harsha", marks:75}
// ];
// let names = students.map(s => s.name);
// let marks = students.map(s => s.marks);
// console.log(names);
// console.log(marks);

// FILTER pass marks

// let marks = [30,40,50,80];
// let passed = marks.filter(m => m >= 40);
// console.log(passed);

// even numbers 
// let numbers = [1,2,3,4,5,6,7,8,9,10] ;
// let evens = numbers.filter(n => n % 2 ===0);
// let odd = numbers.filter(n => n %2 !=0);
// console.log(evens);
// console.log(odd);

// Filter object

// let employees = [
//     {name: "Jaga", role: "developer"},
//     {name: "harshu", role: "tester"},
//     {name: "yugi", role: "QA Manager"}
// ];
// let developers =  employees.filter(emp => emp.role === "tester")
// console.log(developers);

// REDUCE Filter:
// let numbersArray = [15, 20, 30, 40, 50, 60];

// let max = numbersArray.reduce((acc, curr) => curr > acc ? curr : acc);

// console.log(max);

// let numbersArray = [15, 20, 30, 40, 50, 60];

// let max = numbersArray.reduce((acc, curr) => 
//     curr > acc ? curr : acc);
// console.log(max);


// let fruits = ["apple", "banana","goa","pomogranate"];
// let fruitObject = fruits.reduce<Record<string, boolean>>((acc, item) => {
//     acc[item] = true;
//     return acc;
// }, {});
// console.log(fruitObject);

// RTE

// let products = [
//     {name: "phone", price: 10000},
//     {name: "laptop", price: 5000},
//     {name: "Watch", price: 3000},
// ];

// products.forEach(p => console.log(p.name));
// let discounted = products.map(p => p.price * 0.9);
// let expensive = products.filter(p => p.price > 5000);
// let totalValue = products.reduce((acc, p) => acc + p.price, 0);
// console.log(products);
// console.log(discounted);
// console.log(expensive);
// console.log(totalValue);

// OBJECTS

let student ={
    name: "jaga",
    age: 29,
    marks: 90,
    grade:"A"
};
console.log(student.name);
console.log(student.marks=85);
console.log(student.grade = "A");