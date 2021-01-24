(function () {
    'use strict';

    const readlineSync = require('readline-sync');
    let str = readlineSync.question("Please enter a string: ");
    let newStr = str.replace(/ /g, '*');
    console.log(`
${newStr}`);
})();