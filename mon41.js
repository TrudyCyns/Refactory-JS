// Dynamic function
// (a, b) => parameters
//Function not exposing value, just printing=> primitive
function add(a, b) {
    let c = a + b;
    console.log(c);
}
// values in the brackets are arguments
add('10',45);

function mult() {
    let c = add(15,67) * 45;
    // anything returned is accessible outside function
    // All execution ends at the return statement
    return c;
}
mult(45,6);