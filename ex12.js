(function () {
    'use strict';

    const readlineSync = require('readline-sync');
    let str = readlineSync.question("Please enter a string: ");
    let strArr = str.split('');
    let newArr = [];

    for (let x = 0; x <= str.length; x++) {
        if (strArr[x] === 'a' || strArr[x] === 'e' || strArr[x] === 'i' || strArr[x] === 'o' || strArr[x] === 'u' || strArr[x] === 'y') {
            newArr.push(strArr[x].toUpperCase());
        } else {
            newArr.push(strArr[x]);
        }
    }
    console.log(newArr.join(''));
})();