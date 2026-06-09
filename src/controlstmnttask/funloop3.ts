for (let i = 1; i<=9; i++) {
    let pattern = "";
    for(let j = 1; j<=9-i; j++) {
        pattern += " ";
    }
    for(let k = 1; k <= (2*i -2); k++) {
        pattern += " * ";
    }
    for(let m = 1; m <=9; m++){
        pattern = "";    
    }
    for(let n =1; n<= 9-i; n++){
        pattern += " ";
    }
    for(let p=1; p<=i; p++){
        pattern += " *"
    }
console.log(pattern);
} 