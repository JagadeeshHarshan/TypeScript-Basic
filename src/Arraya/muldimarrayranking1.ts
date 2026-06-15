type Result = {
    studentId: number;
    name: string;
    marks: number[];
};

let results: Result[] = [
   { studentId: 1, name: "Jaga" ,marks:[80,75,92] },
   { studentId: 2, name: "Bob", marks:[65,70,68] },
   {studentId: 3, name: "Charlie", marks:[95,90,98]},
   {studentId: 4, name: "David", marks:[50,55,60]},
   {studentId: 5, name: "Harsha", marks:[85, 88, 90]}
];

let rankedStudentPerformance =
results.map(r => { let avg = r.marks.reduce((sum,m) => sum+ m, 0) / r.marks.length;
    return{...r, avg};
});

rankedStudentPerformance.sort((a ,b) => b.avg - a.avg);

let cutoffIndex = Math.floor(rankedStudentPerformance.length * 0.2);
let toppers = rankedStudentPerformance.slice(0, cutoffIndex +1);

console.log("=== Student Ranking ===");
console.table(rankedStudentPerformance);

console.log("\n=== Toppers (Top 20%)===");
console.table(toppers);

