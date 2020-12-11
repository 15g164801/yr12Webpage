console.log('Will Run as soon as the code is loaded')

// These are effectively global variables
let question = "awaiting click"
let expectedAnswer = 0;

function getRandomInt(from, to) {
  return Math.floor(Math.random() * (to - from)) + from;
}

function onClickAsk() {
  console.log('Ask')

  let divQuestion = document.getElementById('question')

  // Generate some values
  let a = getRandomInt(1, 10);
  let b = getRandomInt(1, 10);

  // Compose the question, calculate correct answer
  expectedAnswer = a * b;
  question = `What is ${a} x ${b}?`

  // Put the question onto the page
  divQuestion.innerHTML = question;
}


function onClickAnswer() {
  console.log('Answer')

  let playerAnswerRaw = document.forms['maths-quiz']['player-answer'].value;
  let divAnswer = document.getElementById('ans')
  // Convert to integer
  let playerAnswer = parseInt(playerAnswerRaw);
  let blanc = playerAnswerRaw.empty;

  // Use alerts to feedback to the user
  // Not pleasant in real UI's, but you need to know how to do this...
  if (playerAnswer === expectedAnswer) {
    divAnswer.innerHTML = 'Correct!'
  } else if (playerAnswer === blanc) {
    alert('Use a valid answer')
  } else {
    divAnswer.innerHTML = 'Incorrect :('
  }
}
function onClickNext() {
  window.location.href = "./second.html";
}


function onClickTrash() {
  document.write('Contents of Page Replaced');
}