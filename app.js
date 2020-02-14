/**
 * Example store structure
 */
const STORE = {
  questions: [
    {
      question: "Who was the first female designer?",
      answers: [
        "Jennifer anniston",
        "Coco Chanel",
        "Ruth Bader Ginsberg",
        "Hillary Clinton"
      ],
      correctAnswer: "Coco Chanel"
    },
    {
      question: "Who is a famed shoe designer featured in Sex and the City?",
      answers: [
        "Christian Lacroix",
        "John Leguizamo",
        "Manolo Blahnik",
        "Brad Pitt"
      ],
      correctAnswer: "Manolo Blahnik"
    },
    {
      question: "What type of hat is this?", //img here??
      answers: ["Flapper", "Dorky hat", "Postman", "Cowboyhat"],
      correctAnswer: "Cowboy hat"
    },
    {
      question: "What shoe designer created the red soled shoe?",
      answers: [
        "Christian Louboutin",
        "Jonathan Taylor Thomas",
        "Steven Tyler",
        "Gene Simmons"
      ],
      correctAnswer: "Christian Louboutin"
    },
    {
      question: "What is widely considered the fashion capital of the world?",
      answers: [
        "Juneau, Alaska",
        "Mexico City",
        "Paris, France",
        "North Siberia, Russia"
      ],
      correctAnswer: "Paris, France"
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

function generateStartScreenHtml() {
  return `
  <div class="start-screen">
    <p>This quiz will test your fashion knowledge.
      When it is over you will be a fashion... monger!
    </p>
    <button type="button" id="start">Start Quiz</button>
  </div>
  `;
}

function generateQuestionNumberandScoreHtml() {
  return ` 
  <ul class="question-and-score">
    <li id="question-number">
      Question Number: ${STORE.questionNumber + 1}/${STORE.questions.length}
    </li>
    <li id="score">
      Score: ${STORE.score}/${STORE.questions.length}
    </li>
  </ul>
`;
}
//do i do the above for every question?? change the score each time?

function generateAnswersHtml() {
  const answersArray = STORE.questions[STORE.currentQuestion].answers;
  let answersHtml = '';
  let i = 0;
  //console.log("answers");

  answersArray.forEach(answer => {
    answersHtml += `
    <div id="option-container-${i}">
    <input type="radio" name="options" id="option${i + 1}" value= "${answer}"
    tabindex ="${i + 1}" required>
    <label for="option${i + 1}"> ${answer}</label>
    </div>
    `;
    i++;
  });
  return answersHtml;

function generateQuestionHtml() {
  let currentQuestion = STORE.questions[STORE.currentQuestion];
  return `
  <form id="question-form" class="question-form">
  <fieldset>
  <div class="question">
  <legend> {currentQuestion.question} </legend>
  </div>
  <div class="options">
  <div class="answers">
  ${generateAnswersHtml()}
  </div>
  </div>
  <button type="submit" id="submit-answer-btn" tabindex="5">Submit</button>
  <p>  
  <button type="button" id="next-question-btn" tabindex="6">Next Question</button>
  </p>
  </fieldset>
  </form>
  `;
}

function generateResultsScreen (){
  return `
  <div class="results">
  <form id="js-restart-quiz">
  <fieldset>
  <div class="row"
  <div class="col-12">
  <legend>You Scored: ${STORE.score}/${STORE.questions.length}</legend>
  </div>
  </div>
  
  <div class="row">
  <div class="col-12">
  <button type="button" id="restart">Restart Quiz</button>
  </div>
  </div>`

}

//@param {string} answerStatus


function generateFeedbackHtml(answerStatus){
  let correctAnswer = STORE.questions[STORE.currentQuestion].correctAnswer;
  let html = '';
  if (answerStatus === 'correct'){
    html = `
    <div class="right-answer">That is right!</div>
    `;
  }
  else if (answerStatus === 'incorrect'){
    html = `
    <div class="wrong-answer">Sorry, that is wrong!</div>
    `;
  
  }
}

function generateAnswerList(answers) {
  //template goes here
}


// Rendering functions
function renderQuestionText() {
  let html = "";

  //if //next button is clicked
  //return html = generateQuestionHtml //should we give questions different names
  //${question.question} + 1; //is this right?
}

/* all purpose render function that will conditionally
render the page based upon the state of the STORE*/

function render() {
  let html = "";
  //console.log(STORE.quizStarted, STORE.questionNumber);

  if (STORE.quizStarted === false) {
    $("main").html(generateStartScreenHtml());
    return;
  } else if (STORE.questionNumber < STORE.questions.length) {
    html = generateQuestionNumberandScoreHtml();
    html += generateQuestionHtml();
    $("main").html(html);
  } else {
    $("main").html(generateResultsScreen());
  }
}

// Event handlers

function handleStartClick() {
  $("main").on("click", "#start", function(event) {
    console.log("started");
    STORE.quizStarted = true;
    render();
  });
}
function handleNextQuestion() {
  //this is where we can write which question to show
  $("main").on("click", "#next-question-btn", event => {
    //event is moving on to the next page
    STORE.questionNumber < STORE.questions.length;
    render();
  });
}

function showResults() {
  //you got it right! oh no its wrong you suck
  const answerContainers = STORE.querySelectorAll(".answers");
  console.log("results");
}

//handles the
function handleAnswerSubmitted() {
  $("main").on("submit", "#question-form", function (event) {
    event.preventDefault();
    // Retrieve answer identifier of user-checked radio btn
    // Perform check: User answer === Correct answer?
    // Update STORE and render appropriate section
  });
}
$(handleAnswerSubmitted);

function handleQuizApp() {
  render();
  handleStartClick();
  handleNextQuestion();
}

$(handleQuizApp);

/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
*/