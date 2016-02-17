import $ from 'jquery';

import dragAndDrop from './dragAndDrop.js';
import dragAndHover from './dragAndHover.js';
import validateForm from './validateForm.js';
import resetQuiz from './resetQuiz.js';

let hideQuizSlide = function(pageId) {
    let quizSlide = document.getElementById('quiz--' + pageId);

    quizSlide.classList.remove('active');
    setTimeout( () => {
        quizSlide.style.display = 'none';
    }, 400);
}

var resetTimer;

let showQuizSlide = function(pageId) {
    let quizSlide = document.getElementById('quiz--' + pageId);

    quizSlide.style.display = 'block';

    setTimeout( () => {
        quizSlide.classList.add('active');

        if ( $(quizSlide).hasClass('quiz__dnd') ) {
            dragAndDrop();
        } else if ( $(quizSlide).hasClass('quiz__dnh') ) {
            // dragAndHover();
        } else if ( $(quizSlide).hasClass('quiz__results') ) {
            console.log('show results');
        } else if ( $(quizSlide).hasClass('quiz__recipes') ) {
            validateForm();
        } else if ( $(quizSlide).hasClass('quiz__end') ) {
            resetTimer = window.setTimeout(() => {
                resetQuiz();
            }, 15000);
        }
    }, 400);
}

export {showQuizSlide, hideQuizSlide}
