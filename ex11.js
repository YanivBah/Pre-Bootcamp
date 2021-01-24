(function () {
    'use strict';

    const readlineSync = require('readline-sync');
    let str = readlineSync.question("Please enter a string: ");
    
    function reverse(string) {
        return string.split('').reverse().join('');
    }

    if (str === reverse(str)) {
        console.log(`
"${str}" is a palindrome!`);
    } else {
        console.log(`
Sorry but "${str}" is not palindrome.`);
    }

})();