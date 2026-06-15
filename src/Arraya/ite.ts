let skills = ["Selenium", "Playwright", "Cypress","API"];
for (let i = 0; i<skills.length;i++) {
    console.log(`Skill ${i+1}: ${skills[i]}`);
}

for (let skill of skills) {
    console.log("using for-of:", skill);
} 
for (let index in skills) {
    console.log("Using for_of:", skills);
}
skills.forEach((skill, i) => {
    console.log(`forEach[${i}]: ${skill}`);
});