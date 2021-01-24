(function () {
    'use strict';

    const readlineSync = require('readline-sync');
    let arrayLength = Number(readlineSync.questionInt("Please enter an integer: "));
    let rndArr = [];
    let min = 50, max = 0;

    for (let i = 1; i <= arrayLength; i++) {
        rndArr.push(Math.floor(Math.random() * (50) + 1));
    }

    for (let num of rndArr) {
        if (num <= min) {
            min = num;
        }
        if (num > max) {
            max = num;
        }
    }


    console.log("\x1b[1m","\x1b[31m",`
        Min is ${min}
        Max is ${max}`,"\x1b[0m");
})();