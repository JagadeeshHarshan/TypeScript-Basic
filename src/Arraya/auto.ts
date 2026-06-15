type TestCase = {
    id:number;title:string;
    status: "Pass" | "Fail" | "Skip";
};

let testCases: TestCase[] = [
    {id: 1, title: "Login with valid Crenditianls", status: "Pass"},
    {id: 2, title: "Login with Invalid password", status: "Fail"},
    {id: 3, title: "Checkout with empty cart", status: "Skip"},
    {id: 4, title: "Search product", status: "Pass"}
];

let passed = testCases.filter( tc => tc.status === "Pass").length;
let failed = testCases.filter(tc => tc.status === "Fail").length;
let skipped = testCases.filter(tc => tc.status === "Skip").length;

console.log(testCases);
console.log(passed,failed,skipped);