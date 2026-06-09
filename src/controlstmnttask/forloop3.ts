let letters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for  (let i=0; i<=3; i++ ){
    let  pattern= "        "; 
    for (let  j = 0; j<6; j++) {
        pattern+= letters[i + j] + "      ";
    } 
    console.log(pattern);
} 
    




    
