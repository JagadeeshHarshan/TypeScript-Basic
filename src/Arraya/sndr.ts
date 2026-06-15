let fronted: string[]= ["HTML", "CSS", "Javascript"];
let backend: string[]= ["Node.js", "Express", "MongoDB"];

let fullStack: string[] = [...frontend, ...backend];
console.log("Full Stack:", fullStack);

function logSkills(...skills:string[]): void{
    console.log("skills:", skills.join(","));
}
logSkills("selenium", "playwright", "Cypress", "API");