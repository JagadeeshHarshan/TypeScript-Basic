console.log("Exam started");

class Student {

    startExam() {
        setTimeout(() => {
            console.log("Writing Exam");
        }, 3000);
    }
    
}
console.log("exam ends");

const student = new Student();

student.startExam();



