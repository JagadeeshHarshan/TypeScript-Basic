import { LoginTest } from "./login";
import { SmokeSuite } from "./smoke";

console.log("\n=== AUTOMATION TEST SUITE STARTED ===");

const tests = [
    new LoginTest("Chrome"),
    new SmokeSuite("Edge"),
];

for(const test of tests) {
    console.log("\n--------------------------------");
    test.runTest();
    console.log("----------------------------------");
} 
console.log("ALL TESTS EXECUTED SUCESSFULLY");