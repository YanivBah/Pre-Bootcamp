(function () {
    'use strict';

    const readlineSync = require('readline-sync');
    let str = readlineSync.question(`Please enter an string/s for the first array (Use , between strings): `).split(",");
    let str2 = readlineSync.question(`Please enter an string/s for the second array (Use , between strings): `).split(",");

    function join(str,str2) {
        let JoinedArr = str.concat(str2);
        return JoinedArr;
    }
/*
    console.log(`
Array 1:`);
    console.log(str);
    console.log(`
Array 2:`);
    console.log(str2);
    console.log(`
Joined Array:`);
    console.log(join(str,str2));
*/
    console.log(`
Array 1:
${str}

Array 2:
${str2}

Joined Array:
${join(str,str2)}
`);
})();