(function () {
    'use strict';

    const readlineSync = require('readline-sync');
    let num = Number(readlineSync.questionInt("Please enter a positive number: "));
    let factorial = 1;
    for (let x = 1; x <= num; x++) {
        factorial *= x;
    }
    console.log(`The factorial number of ${num} is ${factorial}.`);
})();