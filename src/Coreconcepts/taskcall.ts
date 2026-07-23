class Car {

    start() {
        console.log("car is started");
        this.drive();
        console.log("car is stopped");
    }
    drive() {
        console.log("Driving the car");
    }
}
    const car = new Car();
    car.start();


