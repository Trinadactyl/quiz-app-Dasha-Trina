'use strict';
const STORE = {
  questions: [
    {
      question: 'Who was the first female fashion designer?',
      answers: [
        'Jennifer Aniston',
        'Coco Chanel',
        'Ruth Bader Ginsberg',
        'Hillary Clinton'
      ],
      correctAnswer: 1
    },
    {
      question: 'Who is a famed shoe designer featured in Sex and the City?',
      answers: [
        'Christian Lacroix',
        'John Leguizamo',
        'Manolo Blahnik',
        'Brad Pitt'
      ],
      correctAnswer: 2
    },
    {
      question: 'What type of hat do cowboys typically wear?',
      answers: ['Flapper', 'Dorky hat', 'Postman', 'Cowboy hat'],
      correctAnswer: 3
    },
    {
      question: 'What shoe designer created the red soled shoe?',
      answers: [
        'Christian Louboutin',
        'Jonathan Taylor Thomas',
        'Steven Tyler',
        'Gene Simmons'
      ],
      correctAnswer: 0
    },
    {
      question: 'What is widely considered the fashion capital of the world?',
      answers: [
        'Juneau, Alaska',
        'Mexico City',
        'Paris, France',
        'North Siberia, Russia'
      ],
      correctAnswer: 2
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

//let currentQuestion = STORE.questions[STORE.questionNumber];

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

function generateAnswersHtml() {
  const answersArray = STORE.questions[STORE.questionNumber].answers;
  let answersHtml = '';
  let i = 0;

  answersArray.forEach((answer, i) => {
    answersHtml += `
    <div id="option-container-${i}">
    <input type="radio" name="options" id="option${i + 1}" value= "${i}
    " tabindex ="${i + 1}" required>
    <label for="option${i + 1}"> ${answer}</label>
    </div>
    `;
  });

  return answersHtml;
}

function generateQuestionHtml() {
  let currentQuestion = STORE.questions[STORE.questionNumber]
  return `
  <form id="question-form" class="question-form">
  <fieldset class="fieldset">
  <div class="question">
  <h2>${currentQuestion.question}</h2>
  </div>
  <div class="answers">
  ${generateAnswersHtml()}
  </div>
  <p>
  <button type="submit" id="submit-button"
  tabindex="5">Submit</button>
  </p>
  </fieldset>
  </form>
  `;
}

function generateAnswerList(answers) {
  return `
  <div><ul>
    <li>answer1</li>
    <li>answer2</li>
    <li>answer3</li>
    <li>answer4</li>
  </ul>
  </div>
  `;
}

function generateResultsScreen() {
  return `
  <body background="https://www.onlinebooksreview.com/uploads/blog_images/2019/02/10_vector_fashion_girls_design_elements_set_575174.jpg">
  <div class="results">
  <form id="reset-quiz">
  <fieldset>
  <h3>You Scored:${STORE.score}/${STORE.questions.length}</h3>
  </div>
  <p>
  <button type="button" id="reset">Reset Quiz</button></p>
  </fieldset>
  </form>
  </body>
  `;
}

function generateFeedbackHtml(answerStatus) {
  let correctAnswer = STORE.questions[STORE.questionNumber].correctAnswer;
  let html = '';
  if (answerStatus === 'correct') {
    html = `
    <div class="right-answer">Correct!</div>
    `;
  } else {
    html = `
    <div class="wrong-answer">Sorry! That's wrong...
    <p>the correct answer is:
    ${STORE.questions[STORE.questionNumber].answers[correctAnswer]}</p>
    </div>
    `;
  }
  html += `<button id="next-question-button"
  tabindex="6">Next</button>`;
  return html;
}

// Rendering functions
function renderQuestionText() {
  $('main').text(questionTitle);
  $('main').html('');
  for (var i = 0; i < STORE.currentQuestion.answers.length; i++) {
    $('main').closest(`
    <li id="${i}">${question.answers[i]}</li>`);
  }
}

//when somoene clicks next, the site needs to be rendered
//with the next question, and its title, etc.

/*$("main").on("click", "next-button", function(event) {
    STORE.question[STORE.questionNumber + 1];
  });
}
/*let currentQuestion = STORE.questions[STORE.questionNumber];
  $("main").text(STORE.questionTitle);
  if (STORE.currentQuestion + 1)
  $("main").text(questionTitle + 1){
  });
  /let html = "";
  //if (STORE.currentQuestion + 1) {
    //$("main").html(generateQuestionHtml());
  }
  //if next button is clicked
  //return html = generateQuestionHtml //should we give questions different names
  //${currentQuestion.question} + 1; //is this right?
}
/* all purpose render function that will conditionally
render the page based upon the state of the STORE*/

function render() {
  let currentQuestion = STORE.questions[STORE.questionNumber]
  let html = '';

  if (STORE.quizStarted === false) {
    $('main').html(generateStartScreenHtml());
    return;
  } else if (STORE.questionNumber < STORE.questions.length) {
    html = generateQuestionNumberandScoreHtml();
    html += generateQuestionHtml();
    $('main').html(html);
  } else {
    $('main').html(generateResultsScreen());
  }
  console.log(currentQuestion);
}

// Event handlers

function handleStartClick() {
  $('main').on('click', '#start', function(event) {
    //console.log("submitted");
    event.preventDefault();
    STORE.quizStarted = true;
    render();
  });
}
function handleNextQuestion() {
  $('main').on('click', '#next-question-button', function(event) {
    event.preventDefault();
    STORE.questionNumber++;
    render();
  });
}

//do i need a next button? submit should do the trick?

function handleAnswerSubmitted() {
  $('main').on('submit', '#question-form', function(event) {
    event.preventDefault();
    console.log('submitted');
    // Retrieve answer identifier of user-checked radio btn
    let selectedOption = $('input[name=options]:checked').val();

    // Perform check: User answer === Correct answer?
    if (
      parseInt(selectedOption) ===
      STORE.questions[STORE.questionNumber].correctAnswer
    ) {
      STORE.score++;
      $('main').html(generateFeedbackHtml('correct'));
    } else {
      $('main').html(generateFeedbackHtml('incorrect'));
    }
    $('#next-question-button').show();
    $('#submit-button').hide();
  });
}

function handleResetButton() {
  $('main').on('click', '#reset', () => {
    STORE.questionNumber = 0;
    STORE.score = 0;
    STORE.quizStarted = false;
    render();
  });
}

function handleQuizApp() {
  render();
  handleStartClick();
  handleNextQuestion();
  handleAnswerSubmitted();
  handleResetButton();
}

$(handleQuizApp);
