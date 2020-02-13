'use strict';
const store = {
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

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)