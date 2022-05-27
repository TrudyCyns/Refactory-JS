let Car = function (name, yofMake, nDoors, nSeats) {
    this.name = name;
    this.yofMake = yofMake;
    this.nDoors = nDoors;
    this.nSeats = nSeats;
};

let car1 = new Car("Toyota", "1987", "5", 5);
let car2 = new Car("Benz", "2019", "7", 9);
let car3 = new Car("Subaru", "1998", "5", 3);

console.log(car1);

