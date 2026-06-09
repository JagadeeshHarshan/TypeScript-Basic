function registeruser(
    name: String,
    email: String,
    age?: number

): void{
    console.log("Name:", name);
    console.log("email:", email);
    if (age !== undefined) {
        console.log("age:", age);
    } else{
        console.log("age:not provided");
    }
}
registeruser("jaga", "jaga@2gmail.com", 29);
registeruser("harsha","harshu2000@gmail.com");