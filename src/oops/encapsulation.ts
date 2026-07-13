class Student {
    public studentName: string;
    public rollNumber: number;
    private age: number;

    constructor(studentName:string, rollNumber: number, age: number) {
        this.studentName = studentName;
        this.rollNumber = rollNumber;
        this.age = age;
    }
    showDetails() {
        console.log("Student Name is:", this.studentName);
        console.log("Student rollNumber is:", this.rollNumber);
        
    }
    showAge() {
        if (this.age >= 18 )
        console.log("age eligible to write:",this.age);
    }
}
const student1 = new Student("Harshu", 90,25);
student1.showDetails();
student1.showAge();
console.log("studentName:", student1.studentName);
