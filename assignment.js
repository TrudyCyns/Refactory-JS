/*
A function called wrkr is declared and takes name, age and position parameters and returns name value.

*/
function wrker(name, age, position) {
    // returns value of name for external use
    return name;



    /*
    Take sal parameter
    
    */
    function wrkSal(sal) {
        //sal argument assigned to wrkSal
        const wrkSal = sal;
        //wrkSal returned
        return wrkSal;
    }

    /*
    
    take rate parameter
    */
    function empNSSF(rate) {
        //assign value of rate to nssfrate
        const nssfrate = rate;
        //give 2000000 as argument for wrkSal function and assign to pay
        let pay = wrkSal(2000000);
        // divide rate by 100 mulitply by pay value
        let nssf = (rate / 100) * pay;
        // subtract nssf from pay to get fnalnssf
        let fnalnssf = pay - nssf;
        //return value of fnalnssf
        return fnalnssf
    }
    /*
    paye function takes rate as parameter calculates final paye
    
    */

    function paye(rate) {
        //assign rate argument to payerate
        const payerate = rate;
        // assign wrkSal function with argument 2000000 to pay
        let pay = wrkSal(2000000);
        // divide rate by 100 and mulitply by pay value
        let payee = (rate / 100) * pay;
        // subtract payee from pay
        let fnalpaye = pay - payee;
        // return value of fnalpaye
        return fnalpaye;
    }

    /*
    emplynetpay function prints values on log depending on arguments provided
    
    */
    function emplynetpay() {
        //display on terminal
        console.log('Employee ' + wrker('osman', 27, 'manager') + 'earns: ' + wrkSal(2000000));
        console.log('his pay after nssf is : ', empNSSF(11));
        console.log('his pay after payee is : ', paye(30));

        //invokes emplynetpay function
        emplynetpay();
    }
}
