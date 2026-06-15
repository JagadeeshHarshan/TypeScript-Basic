let fruits: string[] = ["Apple", "Banana", "Mangoes"];
fruits.push("Orange"); 
fruits.push("Grapes");
console.log("After add:", fruits);

fruits.pop();
fruits.shift();
console.log("After remove:", fruits);
console.log("Index of mango:", fruits.indexOf("Mango"));
console.log("Includes Banana?", fruits.includes("Banana"));
console.log("Length of array:", fruits.length);
fruits.sort();
console.log("sorted:", fruits);