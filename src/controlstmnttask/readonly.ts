interface Employee {
    readonly id: number;
    name: string;
    age: number;
    salary: number;
}
const emp: Employee = {
    id: 100,
    name: "jaga",
    age: 29,
    salary: 50000
};
console.log(emp.name);