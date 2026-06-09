let letters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for (let i = 0; i<5; i++) {
    let result = " " ; 
for (let j = 0; j<= i; j++) {
    result += letters [i + j] + " ";
}
console.log(result);
} 