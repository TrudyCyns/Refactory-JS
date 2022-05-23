function add() {
    let num1 = 200;
    let num2 = 800;
    let ans = num1 + num2;
    console.log(ans);
    return ans;
}

function sub() {
    let num1 = 200;
    let num2 = 800;
    let ans = num2 - num1;
    console.log(ans);
    return ans;
}
// console.log(add());

function general() {
    let a = add();
    let s = sub();
    let d = a - s;
    console.log(d);
}

add();
sub();
general();