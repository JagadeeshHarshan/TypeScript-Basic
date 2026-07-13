class Student {
    name: string;
    marks: number;
    grade: string;

    constructor(name: string, marks: number, grade: string) {
        this.name = name;
        this.marks = marks;
        this.grade = grade;
    }
    displayDetails(): void {
        if (this.marks >= 70) 
            console.log("Student Grade with distinction:", this.grade)
        console.log("Student Name:" , this.name);
        console.log("Student Marks:" , this.marks);
}

}
const student1 = new Student("Jaga", 91, "A");
 student1.displayDetails();
 