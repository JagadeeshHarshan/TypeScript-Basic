class Student {
    study() {
        console.log(" Student is studying");
    }

    writeExam() {
        console.log("Student is writing exam");
    }

    goHome() {
        console.log("Student is going home");
    }
}

const student = new Student();

student.study();
student.writeExam();
student.goHome();