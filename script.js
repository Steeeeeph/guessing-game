(function(){
    document.getElementById("run").addEventListener("click", function () {
    // 1. Secret number generating
    const generateNum = Math.round(Math.random() * (22-1) + 1);

    // console.log(generateNum);
    // 2. user can enter a guess
    let guessNum = document.getElementById("guess").value;
    
    // console.log(guessNum);
    // 3. push play and number will be compared to secret number
    if (guessNum == generateNum) {
        alert('Awesome! You number '+ guessNum + ' was correct. You can be named many things, hungry not being one of them.')
    } else {
        alert('Bummer... You guessed ' + guessNum + ' and the secret number was '+ generateNum + '.')
    }
    });
    /* 4. depending outcome: alertboxes show 
    Awesome! You number (actual number) was correct. You can be named many things, hungry not being one of them.
    Bummer... You guessed (guess) and the secret number was (secret number).
    */
})();
