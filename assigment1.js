(function () {
    'use strict';

    const readlineSync = require('readline-sync');
    let q1 = ['Yesterday', 'Hey Jude', 'Here Come The Sun', 'Let It Be'];
    let q2 = ['Stroke', 'Heart Attack', 'Cancer', 'Assassination'];
    let q3 = ['Ride', 'Wife', 'Life', 'Child'];
    let q4 = ['Eric Clapton', 'Jimi Hendrix', 'B.B. King', 'Neil Young'];
    let q5 = ['Ravid Plotnik', 'Mooki', 'Tomer Yosef', 'Mosh Ben Ari'];
    let right = [0, 2, 3, 1, 3];
    let answer = [];
    let score = 0;
    console.log(`
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒ Welcome to my music quiz! ▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`);
    answer.push(Number(readlineSync.keyInSelect(q1, `What is the most popular song of Beatles?`)));
    answer.push(Number(readlineSync.keyInSelect(q2, `What is the cause of Bob Marley death?`)));
    answer.push(Number(readlineSync.keyInSelect(q3, `Complete the blank: Sweet _____ O' Mine`)));
    answer.push(Number(readlineSync.keyInSelect(q4, `Who considered the greatest guitarist ever?`)));
    answer.push(Number(readlineSync.keyInSelect(q5, `Which one is not a Israeli rapper?`)));
    for (let x = 0, y = 5; x < y; x++) {
        if (right[x] === answer[x]) {
            score += 20;
        }
    }
    console.log(`
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒ The score is: ${score}! ▒▒▒▒▒▒▒▒▒`);
    
    if (score >= 80) {
        console.log(`▒▒▒▒▒ Your music knowledge is ▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒ A-M-A-Z-I-N-G! ▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`);
    } else if (score >= 60 && score < 80) {
        console.log(`▒▒▒▒▒▒ You know a thing or two ▒▒▒▒▒▒
▒▒▒▒▒ but always hope for more! ▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`);
    } else {
        console.log(`▒▒▒▒▒▒ This is the lowest score ▒▒▒▒▒
▒▒▒▒▒▒ we ever seen, SHAME YOU! ▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`);
    }


})();