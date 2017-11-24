// click on dice
// dice will generate random number 1 - 6
// if number is not 1
// number will add to current
// if number is 1
// switch player - if now is player 1 change to player 2 go back to step 1
// if hold is press current will add to final
// check if final is >= 50 to win



var currentScore = 0;
var currentPlayer = 0;
var number = 0;
var finalScore = [0, 0];
var win = 20;
var dice = document.querySelector('.dice img');
var circle = document.querySelectorAll('.circle');
circle[0].style.visibility = 'visible';



// function to check which player
function next() {
  if (currentPlayer === 0) {
circle[1].style.visibility = 'visible';
circle[0].style.visibility = 'hidden';
    return currentPlayer = 1;
  } else {
    circle[0].style.visibility = 'visible';
    circle[1].style.visibility = 'hidden';
    return currentPlayer = 0;
  }
}


// new button
function newButton() {
  currentScore = 0;
  currentPlayer = 0;
  finalScore = [0, 0];

  circle[0].style.visibility = 'visible';
  circle[1].style.visibility = 'hidden';

  document.querySelector('#score0').textContent = 0;
  document.querySelector('#score1').textContent = 0;

  document.querySelector('#current0').textContent = 0;
  document.querySelector('#current1').textContent = 0;

  document.querySelector('.btn-roll button').addEventListener('click', rollButton);
  document.querySelector('.btn-hold button').addEventListener('click', holdButton);
}


// roll button
function rollButton() {
  // roll dice
  number = Math.floor(Math.random() * 6 + 1);
  dice.src = 'img/dice-' + number + '.png';
  // dice.setAttribute('src', 'img/dice-' + number + '.png');

  // check number on dice
  if (number !== 1) {
    currentScore += number;
    document.querySelector('#current' + currentPlayer).textContent = currentScore;
  } else {
    currentScore = 0;
    document.querySelector('#current' + currentPlayer).textContent = currentScore;
  next();

  }
}


// Checking for Win
function checkWin(winning) {
  if (winning >= win) {
    document.querySelector('.btn-roll button').removeEventListener('click', rollButton);
    document.querySelector('.btn-hold button').removeEventListener('click', holdButton);
alert('Click on New Game');
    return 'You win!';
  } else {
    return winning;
  }
}


// hold button
function holdButton() {
  finalScore[currentPlayer] += currentScore;
  finalScore[currentPlayer] = checkWin(finalScore[currentPlayer])
    document.querySelector('#score' + currentPlayer).textContent = finalScore[currentPlayer];
  currentScore = 0;
    document.querySelector('#current' + currentPlayer).textContent = currentScore;
    ;
  next();
}


// when you press the new button
document.querySelector('.btn-new button').addEventListener('click', newButton);
// when you press the roll button
document.querySelector('.btn-roll button').addEventListener('click', rollButton);
// when you press the hold button
document.querySelector('.btn-hold button').addEventListener('click', holdButton);
