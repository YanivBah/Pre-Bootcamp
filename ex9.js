(function () {
    'use strict';

    const readlineSync = require('readline-sync');
    let n = Number(readlineSync.questionInt(`
Please enter a number: `));
    let primeList = [];

    function chkPrime(num) {
        if (num === 1) {
            return false;
        } else if (num === 2) {
            return true;
        } else {
            for (let x = 2; x < num; x++) {
                if (num % x === 0) {
                    return false;
                }
            }
            return true;
        }
    }

    for (let num = 1; num <= n; num++) {
        if (chkPrime(num) === true) {
            //console.log(`${n} is a prime number.`);
            primeList.push(num);
        }
    }
    console.log(`
                    |This is all the prime numbers between 1 to ${n}:|    
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
${primeList}
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`);
})();