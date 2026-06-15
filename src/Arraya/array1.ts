type EmployeeRecord = {
    id: number;
    name: string;
    role: string;
    active: boolean;
};

let employees: EmployeeRecord[] = [
    { id: 1, name: "Giri", role: "Tester", active: true},
    { id: 2, name: "Ravi", role: "Developer", active: false},
    {id: 3, name: "Charan", role: "Manager", active: true}
];


let activeEmployees = employees.filter(emp => emp.name);

let employeeNmaes = employees.map(emp=> emp.name);

let manager = employees.find(emp => emp.role === "Manager");

console.log("Active Employees:" , activeEmployees);
console.log("Employee Names:", employees);
console.log("Manager:", manager);

export {};
