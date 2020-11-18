(function(){
    document.getElementById("run").addEventListener("click", function () {
    // 1. Secret number generating
   const generateNum = Math.round(Math.random() * (22-1) + 1);
    // console.log(generateNum);

    // 2. user can enter a guess
    let guessNum = Number(document.getElementById("guess").value);
    // console.log(typeof guessNum);

    // 3. push play and number will be compared to secret number
    /* 4. depending outcome: alertboxes show 
    Awesome! You number (actual number) was correct. You can be named many things, hungry not being one of them.
    Bummer... You guessed (guess) and the secret number was (secret number). */

    if (guessNum == generateNum) {
        alert('Awesome! You number '+ guessNum + ' was correct. You can be named many things, hungry not being one of them.');
    } 
    /* 5. Nice to have:When a guess was just one number from the secret number, show another message: 
    "So close, but you just missed it! Are you in a class that started on the thirteenth or what?"*/
    else if (guessNum == generateNum + 1 || guessNum == generateNum - 1) {
        alert('So close, but you just missed it! Are you in a class that started on the thirteenth or what?');
    }
    else {
        alert('Bummer... You guessed ' + guessNum + ' and the secret number was '+ generateNum + '.');
    }
    });
})();
