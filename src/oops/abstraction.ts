abstract class Shape {
    abstract area (): number;
    abstract perimeter (): number;

showDetails(): void {
    console.log(`area:${this.area()},perimeter :${this.perimeter()}`)
}
}

 class Rectangle extends Shape{
    width: number;
    height: number;

    constructor(width: number, height : number) {
        super();
        this.width = width;
        this.height = height;
    }
    area(): number {
        return this.width * this.height;
    }
    perimeter (): number{
        return 2 * (this.width+ this.height);
    }
}
const rect = new Rectangle(15,10);
rect.showDetails();


