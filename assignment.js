/*
A function called "wrker" is defined, takes "name", "age" and "position" parameters and returns "name" value.
*/
function wrker(name, age, position) {
    // Returns value of "name" for use outside of the function.
    return name;
}

/*
A function called "wrkSal" is defined, taking "sal" as a parameter.
It returns a value named "wrkSal".
*/
function wrkSal(sal) {
    //The argument "sal" is assigned to "wrkSal".
    const wrkSal = sal;
    //Returns the value of "wrkSal".
    return wrkSal;
}

/*
A function called "empNSSF" is defined, taking "rate" as a parameter.
It calculates "fnalnssf" from value returned from the "wrkSal" function and the values of other variables declared within it.
It returns a value named "fnalnssf".
*/
function empNSSF(rate) {
    //Assigns value of "rate" to "nssfrate".
    const nssfrate = rate;
    //Gives "2000000" as argument for "wrkSal" function and assigns it to variable "pay".
    let pay = wrkSal(2000000);
    // Divides "rate" by "100", mulitplied by the value of "pay" and assigns it to the variable "nssf".
    let nssf = (rate / 100) * pay;
    // Subtracts the value stored in the variable "nssf" from the value stored in the variable "pay" to get "fnalnssf".
    let fnalnssf = pay - nssf;
    //Returns the value of "fnalnssf".
    return fnalnssf
}

/*
A function called "paye" is defined, taking "rate" as a parameter.
It calculates "fnalpaye" from value returned from the "wrkSal" function and the values of other variables declared within it.
It returns a value stored in variable "fnalpaye".
*/
function paye(rate) {
    //Assigns value of the parameter "rate" to variable "payerate".
    const payerate = rate;
    // Assigns "wrkSal" function with argument "2000000" to "pay".
    let pay = wrkSal(2000000);
    // Divides "rate" by "100" and mulitply by "pay" value.
    let payee = (rate / 100) * pay;
    // Subtracts "payee" from "pay".
    let fnalpaye = pay - payee;
    // Returns value of "fnalpaye".
    return fnalpaye;
}

/*
A function called "empNSSF" is defined.
It displays onto the console the results from the functions "wrker", "wrkSal", "empNSSF" and "paye"
*/
function emplynetpay() {
    //Displays on the terminal.
    console.log('Employee ' + wrker('osman', 27, 'manager') + ' earns: ' + wrkSal(2000000));
    console.log('his pay after nssf is : ', empNSSF(11));
    console.log('his pay after payee is : ', paye(30));
}

//Invokes "emplynetpay" function.
emplynetpay();