import {LoginTest} from "./login";

export class SmokeSuite extends LoginTest {
     private suiteName: string;

    constructor (suiteName: string) {
        super("Edge");
        this.suiteName = suiteName;
    }
    runsuite(): void{
        console.log("/n===========================");
        console.log("Suite Name :", this.suiteName);
        console.log("Browser:       Edge");
        console.log("=============================");

        this.runTest();

        console.log("/nsmoke suite Execution Completed");
    }

}