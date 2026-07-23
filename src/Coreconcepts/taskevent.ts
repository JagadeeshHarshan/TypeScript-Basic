function student1(name: string): void {
    console.log(`writing ${name}`);
}

function student2(name: string): void {
    console.log(`writing ${name}`);
}

function student3(name: string): void {
    console.log(`writing ${name}`);
}

student1("student 1");

setTimeout((): void => {
    student2("student 2");
}, 1);

setTimeout((): void => {
    student3("student 3");
}, 2);  
 4