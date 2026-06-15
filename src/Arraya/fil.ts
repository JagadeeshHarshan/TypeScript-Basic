let scores:number[]= [80,92,65,100,98];

let updatedScores = scores.map(score => score+5);


let highscores = scores.filter(score => score > 85);

let total = scores.reduce((sum, score) => sum+score, 0);

let average = total / scores.length;

let topper = scores.find(score => score ===100);


console.log("Updated Scores:", updatedScores);
console.log("High Scores:", highscores);
console.log("Total:", total, "Average:", average.toFixed(2));
console.log("Topper:", topper);