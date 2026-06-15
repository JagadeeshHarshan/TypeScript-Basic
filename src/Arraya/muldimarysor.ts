type student ={
    id: number;
    name: string;
    marks: number[];
};

let students: student[] = [
    {id:1, name: "Alice",marks: [85,90,88] },
    {id:2, name: "Bob",marks:[70,65,80]},
    {id:3, name:"Charlie",marks:[95,92,98]},
    {id:4, name:"David", marks:[60,75,70]}
];

let studentPerformance = students.map(student => {
    let avg = student.marks.reduce((a,b) => a+b, 0) / student.marks.length;
    return{ id: student.id, name, average: avg};
});

studentPerformance.sort((a,b) => b.average - a.average);

console.log("=== student perfomance Ranking ===");
console.table(studentPerformance);