(function () {
    'use strict';
    let arr = [];

    for (let x = 1, xStr = ''; x <= 100; x++) {
        xStr = x.toString();
        if (x % 10 === 7 || x % 7 === 0) {
            arr.push(`BOOM!`);
        } else if (xStr.startsWith('7') === true) {
            arr.push(`BOOM!`);
        } else {
            arr.push(x);
        }
    }
    console.log(arr);
    //console.table(arr);
})();