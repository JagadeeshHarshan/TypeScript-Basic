for(let i = 1; i<=6; i++) {    
    let pattern = "  ";
for(let j =1; j<=i; j++) {
    pattern += " * " ;
}  
console.log(pattern); 

}


for (let i = 1; i <= 6; i++) {
    let pattern = "";

    // Add spaces
    for (let j = 1; j <= 6 - i; j++) {
        pattern += "   ";
    }

    // Add stars
    for (let k = 1; k <= i; k++) {
        pattern += "* ";
    }

    console.log(pattern);
}


