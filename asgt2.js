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
}
let carpet1 = new Carpet("cotton", "Tru", 500000, "Store", "100x100")
let carpet2 = new Carpet("leather", "G", 1500000, "Mall", "10x150")

// Jean class
let Jean = function (brandName, owner, price, seller, size) {
    this.brandName = brandName;
    this.owner = owner;
    this.price = price;
    this.seller = seller;
    this.size = size;
}

let jean1 = new Jean("Louis Vuitton", "Tru", 500000, "Store", "XS")
let jean2 = new Jean("Good American", "G", 1500000, "Outlet", "XXL")

