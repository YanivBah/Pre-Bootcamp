(function () {
    'use strict';

    const readlineSync = require('readline-sync');
    let money = 50,
    bet = 0,
    answer = 0,
    playerCard,
    myCard,
    q = ['Play another round', 'Leave with my money'],
    cardSymbol = ['♠', '♥', '♦', '♣'],
    rand;

    function playerRandomCard() {
      playerCard =  Math.floor(Math.random() * (12) + 1);
      return playerCard;
    }

    function myRandomCard() {
      myCard =  Math.floor(Math.random() * (12) + 1);
      return myCard;
    }

    function symbolRand() {
    rand =  cardSymbol[Math.floor(Math.random() * cardSymbol.length)];
    return rand;
    }

    function question() {
      answer = Number(readlineSync.keyInSelect(q, `What would you like to do? `));
    }

    function game() {
      while (money >= 1 && answer === 0) {
        bet = Number(readlineSync.questionInt(`
                            Place a bet between 1 to ${money}: `));
        if (bet >= 1 && bet <= money) {
          console.log(`░░░░░░░░░░░░░░░░░░░░░░░░░░ Your card is ${playerRandomCard()} ${symbolRand()} And my card is ${myRandomCard()} ${symbolRand()} ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░`);
          if (playerCard === myCard) {
            console.log("\x1b[1m","\x1b[37m");
            console.log(`░░░░░░░░░░░░░░░░░░░░░░░░░░░ Its a draw! you still have ₪ ${money}! ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░`);
            console.log("\x1b[0m","\x1b[2m","\x1b[33m");
            if (money > 1) {
              question();
            }
          } else if (playerCard > myCard) {
            money += bet;
            console.log("\x1b[1m","\x1b[32m");
            console.log(`░░░░░░░░░░░░░░░░░░░░░░░░░░ You won ₪ ${bet}! you now have ₪ ${money}! ░░░░░░░░░░░░░░░░░░░░░░░░░░░░`);
            console.log("\x1b[0m","\x1b[2m","\x1b[33m");
            if (money > 1) {
              question();
            }
          } else {
            money -= bet;
            console.log("\x1b[1m","\x1b[31m");
            console.log(`░░░░░░░░░░░░░░░░░░░░░░░░░░░░ You lost ₪ ${bet}! you now have ₪ ${money}! ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░`);
            console.log("\x1b[0m","\x1b[2m","\x1b[33m");
            if (money > 1) {
              question();
            }
          }
        } else {
          console.log("\x1b[1m","\x1b[31m","\x1b[40m");
          console.log(`
██████████████████████████████████████████████████████████████████████
████████████████ Sorry but you entered invaild bet. ██████████████████
████████ Bye bye! I guess honesty is pretty rare this days. ██████████
██████████████████████████████████████████████████████████████████████
`);
          break;
        }
    }
    }
    console.log("\x1b[2m","\x1b[33m","\x1b[40m");
    console.log(`
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░ Welcome to The Game of War! ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░`);
    let name = readlineSync.question(`                           Please enter your name: `);

    console.log(`
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░`);
    console.log(`
| Hello ${name}! |                                                        | You have ₪ ${money} |`)

    game();

    if (answer === 1) {
      console.log("\x1b[1m","\x1b[32m","\x1b[40m");
      console.log(`
███████████████████████████████████████████████████████████
███████████████ Goodbye! Hope you had fun! ████████████████
█████████████████ You finished with ₪ ${money}! █████████████████
███████████████████████████████████████████████████████████

`);
    } else if (money === 0) {
      console.log("\x1b[1m","\x1b[31m","\x1b[40m");
      console.log(`
███████████████████████████████████████████████████████████
███████████████ Sorry but you out of money! ███████████████
███████████ Stay away from real life gambling! ████████████
███████████████████████████████████████████████████████████

`);
    } else if (answer === -1) {
      console.log("\x1b[1m","\x1b[31m","\x1b[40m");
      console.log(`
███████████████████████████████████████████████████████████
█████████████ You decided to close the game! ██████████████
████████████████████ Have a good day! █████████████████████
███████████████████████████████████████████████████████████

`);
    }
})();