let fname = "Gertrude";
console.log(typeof (fname));

let num = 45;
console.log(typeof (num));

myData = {
    'fname': 'Gertrude',
    'age': num
}
console.log(typeof (myData));

let no = null;
console.log(typeof (no));

let un;
console.log(typeof (un));

console.log("======================");

for (i = 0; i <= 10; i++) {
    console.log(i);
}

console.log("======================");

function myLoop() {
    for (let i = 0; i <= 100; i += 10) {
        console.log(i);

    }
}

console.log("======================");
myLoop();
