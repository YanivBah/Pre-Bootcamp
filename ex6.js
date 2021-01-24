(function () {
    'use strict';

    const readlineSync = require('readline-sync');
    let num = Number(readlineSync.questionInt("Please choose a number larger than 10: "));

    while (num <= 10) {
        if (num > 10) {
          break;
        }
        num = Number(readlineSync.questionInt("Please choose a number LARGER than 10: "));
      }
      
      if (num > 10) {
        console.log('Thank You!');
      }
})();