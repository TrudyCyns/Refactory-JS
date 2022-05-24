function cond(num1, num2) {
    if (num1 > num2) {
        console.log("num1 is less than num2");
    } else if (num1 == num2) {
        console.log("num2 is equal to num1");
    } else {
        console.log("num1 is equal to num2");
    }
}

cond(3,4);
cond(53, 4);

function whileLoop(num) {
    while (num<10) {
        if (num%2==0) {
            console.log(num);
        } else {
            console.log("Odd number");
        }
        num++;
    }
}

whileLoop(3);
whileLoop(30);