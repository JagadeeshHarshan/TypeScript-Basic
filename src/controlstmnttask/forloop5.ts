let n= 6;

for (let i = 1; i<= n; i++) {
    let pattern = "";
    pattern += "*";

    for (let j = 2; j < n; j++) {
        if (j === i)
        {
            pattern += " *";
        }else{
            pattern += " ";
        }
    }
    pattern += " *";
    console.log(pattern);
}