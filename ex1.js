(function () {
    'use strict';

    const input = require('readline-sync');
    let name = input.question("Please enter your name?\n")
    console.log("Hello " + name + "!")
})();