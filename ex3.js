(function () {
    'use strict';

    const input = require('readline-sync');
    let num = Number(input.question("Enter a number between 0-9: "));
    // Not sure if you mean using the "prompt" option or using "readline-sync".
    //let num = prompt("Enter a number between 0-9:");
    let numName = new Map([
        [0, 'ZERO'],
        [1, 'ONE'],
        [2, 'TWO'],
        [3, 'THREE'],
        [4, 'FOUR'],
        [5, 'FIVE'],
        [6, 'SIX'],
        [7, 'SEVEN'],
        [8, 'EIGHT'],
        [9, 'NINE']
      ]);
      if (num >= 0 && num <= 9) {
        console.log(numName.get(num));
      } else {
        console.log("You entered a wrong number!");
      }
})();