// define a class called car
Car = {}; // Has no objects within

console.log(typeof(Car));

Car = {
    // Properties/Xtics/Features: Properties
    "wheels": 4,
    "doors": 5,
    "model": "Toyota",
    "year": 2000
};
 
console.log(Car["wheels"]);

let Food = {
    foodName: "Cassava",
    type:"",
    owner: "",
    price: ""
};
//  To access the properties of a clas use a dot operator.
console.log(Food.foodName);
console.log(Food);


let Laptop = {
    modelName: "DELL",
    price: 2500000,
    processor: "intel i5",
    RAM : "8GB",
    owner: "Tru"
};