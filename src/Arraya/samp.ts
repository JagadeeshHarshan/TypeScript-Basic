 function basicsDemo(): void{
    let numbers: number[] = [1,2,3,4,5];
    let names: Array<String> = ["Alice", "Bob", "charlie"];
    let mixed:(string | number)[] = ["Test", 100, "QA", 200];

    console.log("Numbers:", numbers);
    console.log("Names:", names);
    console.log("Mixed:", mixed);

    numbers.push(6);
    numbers.unshift("Zara");

    console.log("updated Numbers:", numbers);
     console.log("Updated Names:", names);
}
