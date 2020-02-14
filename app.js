'use strict';
const STORE = {
  questions: [
    {
      qustion: 'Who was the first female designer?',
      answers:[
        'Jennifer Aniston',
        'Coco Chanel',
        'Ruth Bader Ginsberg',
        'Hillary Clinton',
      ],
      correctAnswer:''
    },
    {
      question: 'Who is a famed shoe designer featured in Sex and the City?',
      answers:[
        'Christian Lacroix',
        'John Leguizamo',
        'Manolo Blahnik',
        'Brad Pitt',
      ],
      correctAnswer:''
    },
    {         //includes photo of specific hat
      question:'What type of hat is this?',
      answers:[
        'Flapper',
        'Dorky hat',
        'Sombrero',
        'Cowboy hat'
      ],
      correctAnswer:''
    },
    {
      question: 'What shoe designer created the red soled shoe?',
      answers:[
        'Christian Louboutin',
        'Jonathan Taylor Thomas',
        'Steven Tyler',
        'Gene Simmons'  
      ],
      correctAnswer:''
    },
    {
      question: 'What is widely considered the fashion capital of the world?',
      answers:[
        'Juneau, Alaska',
        'Mexico City',
        'Paris, France',
        'North Siberia, Russia'
      ],
      correctAnswer:''
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};



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

/********** TEMPLATE GENERATION FUNCTIONS **********/
// These functions return HTML templates 

function startPage(){
  //beginning of quiz here
  //start button is here and triggers clickStart()
  
}

function questionPage(){
  //question and answer choices
}

function rightAnswerPage(){
  // informs user that answer is correct
  //continue button
}

function wrongAnswerPage(){
  //informs user that answer is wrong
  //corect answer given
  //continue button
}

function finalPage(){
  //You're done
  //click to restart --> restart()
}

/********** RENDER FUNCTION(S) **********/
// This function conditionally replaces the contents of the <main> tag based on the state of the store

function quizStarted(){
  //when clickStart() is called (aka user clicks start),
  //quiz-started value changes to true
}

function renderAnswers(){
  //when answer is chosen,
  //right or wrong answer page is displayed
}

function renderQuestions(){
  //when start button or continue button clicked,
  //next question is rendered
  //click to --> chooseAnswer()
}

function questionNumber(){
  //question number value increments to show progress
}

function score(){
  //score value increments when questons are answered correctly
}

/********** EVENT HANDLER FUNCTIONS **********/
// These functions handle events (submit, click, etc)

function clickStart(){
  //called when start button is clicked then...
  //quizStarted() is called,
  //renderQuestions() is called
  //questionNumber()---> 0 to 1 
}

function chooseAnswer(){
  //called when answer is chosen
  //is answer right or wrong?                  (does if/else go here??)
  //renderAnswers() is called
  //if question is right score() gets called   (another if/else here?)
}

function clickContinue(){
  //feedback is given, then user will click continue
  //renderQuestion() is called 
  //question number is also called
}

function restart(){
  //on last page of quiz, user can choose to restart quiz
  // click restart button....
  //......startPage() 
}