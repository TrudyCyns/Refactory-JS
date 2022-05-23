/*


*/
function wrker(name, age, position) {
    //
    return name;



    /*
    
    
    */
    function wrkSal(sal) {
        //
        const wrkSal = sal;
        //
        return wrkSal;
    }

    /*
    
    
    */
    function empNSSF(rate) {
        //
        const nssfrate = rate;
        //
        let pay = wrkSal(2000000);
        //
        let nssf = (rate / 100) * pay;
        //
        let fnalnssf = pay - nssf;
        //
        return fnalnssf
    }
    /*
    
    
    */

    function paye(rate) {
        //
        const payerate = rate;
        //
        let pay = wrkSal(2000000);
        //
        let payee = (rate / 100) * pay;
        //
        let fnalpaye = pay - payee;
        //
        return fnalpaye;
    }

    /*
    
    
    */
    function emplynetpay() {
        //
        console.log('Employee ' + wrker('osman', 27, 'manager') + 'earns: ' + wrkSal(2000000));
        console.log('his pay after nssf is : ', empNSSF(11));
        console.log('his pay after payee is : ', paye(30));

        //
        emplynetpay();
    }
}