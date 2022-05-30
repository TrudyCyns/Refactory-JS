// Computational problem with three dynamic flowing functions.

// Total Area, Lateral Area and Volume of a cube.

function cube(side) {
    return side;
}
// Area of cube, excluding the base and top.
function latArea(side) {
    let len = side;

    let latA = 4 * (len * len);
    return latA;
}
// Lateral Area + area of base and top = Total Area
function totArea(side) {
    let len = side;

    let totA = (6 * len * len);
    return totA;
}
function volume(side) {
    let len = side;
    vol = len ** 3;
    return vol;
}

function displayRes() {
    // let { l, w, h } = cube(4,5,6);
    let latA = latArea(10);
    let totA = totArea(10);
    let vol = volume(10);
    console.log('A cube of sides ' + cube(10) + ' has: ');
    console.log(`Lateral Area is ${latA}`);
    console.log(`Total Area is ${totA}`);
    console.log(`Volume is ${vol}`);
}

displayRes();

// Write 7 classes with at least 5 properties and parameters. 

// Carpet class
let Carpet = function (material, owner, price, seller, size) {
    this.material = material;
    this.owner = owner;
    this.price = price;
    this.seller = seller;
    this.size = size;
};
let carpet1 = new Carpet("cotton", "Tru", 500000, "Store", "100x100");
let carpet2 = new Carpet("leather", "G", 1500000, "Mall", "10x150");

// Jean class
let Jean = function (brandName, owner, price, seller, size) {
    this.brandName = brandName;
    this.owner = owner;
    this.price = price;
    this.seller = seller;
    this.size = size;
};
let jean1 = new Jean("Louis Vuitton", "Tru", 500000, "Store", "XS");
let jean2 = new Jean("Good American", "G", 1500000, "Outlet", "XXL");

// Napkin class
let Napkin = function (brandName, material, price, numPapers, color) {
    this.brandName = brandName;
    this.material = material;
    this.price = price;
    this.numPapers = numPapers;
    this.color = color;
};
let napkin1 = new Napkin("Fay", "cotton", 4000, 100, "white");
let napkin2 = new Napkin("Delloite", "paper", 5000, 50, "red");

// Desktop class
let Desktop = function (brandName, owner, price, resolution, size) {
    this.brandName = brandName;
    this.owner = owner;
    this.price = price;
    this.resolution = resolution;
    this.size = size;
};
let desktop1 = new Desktop("HP", "Tru", 2500000, "1600x900", "25 inches");
let desktop2 = new Desktop("DELL", "G", 270000, "1440x600", "18 inches");

// Novel class
let Novel = function (title, author, numPages, rating, genre) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.rating = rating;
    this.genre = genre;
};

let novel1 = new Novel("The Chase", "Clive Cussler", 600, "4.5 stars", "Suspense");
let novel2 = new Novel("The Book Thief", "Markus Zusak", 450, "5 stars", "Fiction");

// Fragrance class
let Fragrance = function (fragName, type, price, size, ingredient) {
    this.fragName = fragName;
    this.type = type;
    this.price = price;
    this.size = size;
    this.ingredient = ingredient;
};

let fragrance1 = new Fragrance("Monaco", "Body Mist", 25000, "15 ounces", "Rose Petals");
let fragrance2 = new Fragrance("Brent", "Spray", 20000, "50 ml", "Ginseng");

// Lightbulb class
let Lightbulb = function (brandName, watts, color, shape, brightness) {
    this.brandName = brandName;
    this.watts = watts;
    this.color = color;
    this.shape = shape;
    this.brightness = brightness;
};

let lightbulb1 = new Lightbulb("Satco", 6, "red", "Circle", "450 lumens");
let lightbulb2 = new Lightbulb("Honeywell", 300, "yellow", "Spiral", "5800 lumens");