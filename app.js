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
//do i do the above for every question??

function generateAnswersHtml() {
  let answersHtml = "";
  //this is only a piece, something is missing

  answersArray.forEach((answer, i) => {
    answersHtml += `
    <div id="option-container-${i}">
    <input type="radio" name="options" id="option${i + 1}" value= "${answer}
    " tabindex ="${i + 1}" required>
    <label for="option${i + 1}"> ${answer}</label>
    </div>
    `;
  });

  return answersHtml;
}

//lost on the below
function generateQuestionHtml() {
  // what question are we on
  // STORE.questionNumber
  // how do we grab that question?
  let question = STORE.questions[STORE.questionNumber];
  // how can we then display that questions title
  return `<div class="question">${question.question}</div>`;
}

function generateAnswerList(answers) {
  //template goes here
}

// Rendering functions
function renderQuestionText() {
  //changes to the html go here
}

function generateResultsScreen() {}

/* all purpose render function that will conditionally
render the page based upon the state of the STORE*/

function render() {
  let html = "";
  console.log(STORE.quizStarted, STORE.questionNumber);

  if (STORE.quizStarted === false) {
    $("main").html(generateStartScreenHtml());
    return;
  } else if (STORE.questionNumber < STORE.questions.length) {
    console.log("here");
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
  $("body").on("click", "#next-question-btn", event => {
    render();
  });
}

//handles the
function handleAnswerSubmitted() {
  $("main").on("submit", "#question-form", () => {
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
 *
 */
