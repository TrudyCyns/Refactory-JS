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
        console.log("Hello");
    }
}

console.log(typeof(Person.greet));