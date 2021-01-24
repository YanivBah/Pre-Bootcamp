(function () {
    'use strict';

    const readlineSync = require('readline-sync');
    let foodType = ['Meat', 'Fish', 'Pizza', 'Coffee'];
    
    let lemehadrinR = new Map([[0, 'Lentrecote'], [1, 'Deca'], [2, 'Pizza Agbania'], [3, 'Cafe Cafe']]);
    let kosherR = new Map([[0, 'West Side'], [1, 'Panacita'], [2, 'Pizza Pino'], [3, 'Flortina']]);
    let notKosher = new Map([[0, 'Port19'], [1, 'Hazaken Vehayam'], [2, 'Philippe'], [3, 'Cafe Fairouz']]);

    console.log(`\n\n====================================================
This will recommends a good restaurants in Tel Aviv!
====================================================`);

let people = readlineSync.questionInt(`How many people are you going with? `);
let kosher = readlineSync.keyInYNStrict(`Should it be Kosher?`);
if (kosher) {
    var lemehadrin = readlineSync.keyInYNStrict(`Should it be Kashrut Lemehadrin?`);
}
let food = Number(readlineSync.keyInSelect(foodType, `What kind of food do you want? `));
if (food === -1) {
    console.log('You decided to exit the program. Bye Bye!');
} else {
    console.log('\nYour choice is ' + foodType[food] + '.');
    if (lemehadrin === true) {
        console.log('The restaurant that recommended for you is: ' + lemehadrinR.get(food) + '.');
    } else if (kosher === true && lemehadrin === false) {
        console.log('The restaurant that recommended for you is: ' + kosherR.get(food) + '.');
    } else {
        console.log('The restaurant that recommended for you is: ' + notKosher.get(food) + '.');
    }
}
})();