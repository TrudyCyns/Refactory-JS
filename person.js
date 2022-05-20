function person(name, age) {
    let sub = age - 10;
    console.log("Dear " + name + ", ");
    console.log("Your new age is: \t" + age);
    return age;
}

person('Gertrude', 23);

console.log('===========================================');

function vehicle(model, numOfWheels, year) {
    console.log("The vehicle is a " + model + ", has " + numOfWheels + " wheels and was made in " + year);
}

vehicle('Harrier', 4, 2011);
vehicle('G-Wagon', 15, 2034);