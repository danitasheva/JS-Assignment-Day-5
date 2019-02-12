var myForm = document.quizForm;

var charName = document.quizForm.characterName;
// var ringBearers = document.quizForm.ringBearers;
var merrysName = document.quizForm.merrysName;
var wizards = document.quizForm.wizards;
var ringDestroyer = document.quizForm.ringDestroyer;

var submitBtn = document.quizForm.submitBtn;


submitBtn.addEventListener('click', displayScore);


function displayScore(event) {
    event.preventDefault();
    document.getElementById('scoreBox').innerHTML = "<p> Your score: " + score() + " out of 4.</p>";
}

var score = function() {

    var scoreIndex = 0;

    if ( charName.value == "Frodo" ) {
         scoreIndex++;

    } if ( merrysName.value == "Meriadoc" ) {
        scoreIndex++;

    } if ( wizards.value == 5 ) {
        scoreIndex++;

    } if ( ringDestroyer.value == "Gullum" ) {
        scoreIndex++;
    } 
    return scoreIndex;
}


console.log(score());






