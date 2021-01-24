(function () {
    'use strict';

    const readlineSync = require('readline-sync');
    let arr = readlineSync.question(`Please enter an integers (Use , between each integer): `).split(",");
    console.log(`
Array before the reverse function:`);
    console.log(arr);
    let count = 0;


    function reverse(arr) {
        for (let i = arr.length - 1; i >= 0; i--) {
            arr.push(arr[i]);
            count++;
        }
        while (arr.length > count) {
            arr.shift();
        }
        return arr;
    }
    console.log(`
Array after the reverse function:`)
    console.log(reverse(arr));

})();