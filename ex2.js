(function () {
    'use strict';

    const input = require('readline-sync');
    let num1 = Number(input.question("Enter a number: "));
    let num2 = Number(input.question("Enter a second number: "));

    function sum() {
        if (num1 + num2 === 10) {
            console.log('makes 10');
        } else {
            console.log('nope');
        }
    }
    sum();
})();