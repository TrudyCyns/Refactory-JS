/*METHODS
    A method defines what an object does to itself or to others.
    It is a group of statements that do the above.
*/

let Person = {
    fName: "Gertrude",
    age: 23,
    residence: "Entebbe",
    // A class' function is called a method.
    greet: function() {
        // Statement in the method of a class is called Behavior
        // To view the behavior of a method, it must be returned.
        return "Hello";
    }
}

console.log(Person.greet());

let Employee = {
    position: "IT Officer",
    name: "Gertrude",
    department: "IT",
    salary: "500ugx",
    age: 47,
    married: function () {
        return "true";
    },
    dead: function () {
        return "false";
    }
}

console.log(Employee.married());

// Accessing properties defines with quotations is done differently: console.log(class["propertyName"])
// Using let stores class in memory. ie let Car = {} will store car in memory but Car = {} isn't storedin memory. 