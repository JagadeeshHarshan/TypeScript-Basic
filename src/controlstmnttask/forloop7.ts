for (let i = 1; i <= 5; i++) {
    let pattern = "";

    for (let j = 1; j <= 5 - i; j++) {
        pattern += " ";
    }

    for (let k = 1; k <= (2 * i - 1); k++) {
        pattern += "*";
    }

    console.log(pattern);
}
for (let m = 5 - 1; m >= 1; m--) {
    let pattern = "";

    
    for (let n = 1; n <= 5 - m; n++) {
       pattern += " ";
    }

    
    for (let p = 1; p <= (2 * m - 1); p++) {
   pattern += "*";
    }

    console.log(pattern);
}