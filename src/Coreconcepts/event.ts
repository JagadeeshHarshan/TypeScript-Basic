function serveCoustomer(name: string): void{
    console.log(`serving ${name}`);
}
 
serveCoustomer("Coustomer 1");

setTimeout((): void => {
    serveCoustomer("Customer 2");
}, 0); 

setTimeout((): void =>{
    serveCoustomer("Customer 3");
}, 0);
