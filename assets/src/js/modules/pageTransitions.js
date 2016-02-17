import $ from 'jquery';

import validateForm from './validateForm.js';

var resetTimer;

export default function() {
    addListeners();
}

let addListeners = function() {
    var nextButton = document.querySelectorAll('.quiz__next'),
        resetButton = document.querySelectorAll('.quiz__reset');

    $(nextButton).on('click', function(event) {
        event.preventDefault;

        let pageId = this.parentNode.getAttribute('data-page');

        hideQuizSlide(pageId);

        pageId++;

        showQuizSlide(pageId);
    });

    $(resetButton).on('click', function() {
        console.log(this.parentNode);

        window.clearTimeout(resetTimer);

        resetQuiz();
    });
}

let hideQuizSlide = function(pageId) {
    let quizSlide = document.getElementById('quiz--' + pageId);

    quizSlide.classList.remove('active');
    setTimeout( () => {
        quizSlide.style.display = 'none';
    }, 400);
}

let showQuizSlide = function(pageId) {
    let quizSlide = document.getElementById('quiz--' + pageId);

    quizSlide.style.display = 'block';

    setTimeout( () => {
        quizSlide.classList.add('active');

        if ($('#quiz--' + pageId).hasClass('quiz__results')) {
            console.log('show results');
        } else if ($('#quiz--' + pageId).hasClass('quiz__recipes')) {
            validateForm();
        } else if ($('#quiz--' + pageId).hasClass('quiz__end')) {
            resetTimer = window.setTimeout(() => {
                resetQuiz();
            }, 15000);
        }
    }, 400);
}

let resetQuiz = function() {
    for (let i = 1; i <= document.querySelectorAll('.quiz__container').length; i++) {
        if (i === 1) {
            showQuizSlide(i);
        } else {
            hideQuizSlide(i);
        }
    }

    // reset radio submits
    let radioSubmit = document.querySelectorAll('.quiz__radio .quiz__next');

    for (let i = 0; i < radioSubmit.length; i++) {
        radioSubmit[i].setAttribute('disabled', 'disabled');
    }

    let radio = document.querySelectorAll('input[type="radio"]');
    
    for (let i = 0; i < radio.length; i++) {
        radio[i].checked = false;
    }

    resetDragAndDrops();
}

let resetDragAndDrops = function() {
    // $('.quiz__dropbox .quiz__item').appendTo('.quiz__list');

    let quizItem = document.querySelectorAll('.quiz__dropbox .quiz__item');

    for (let i = 0; i < quizItem.length; i++) {
        quizItem[i].style.display = '';
        quizItem[i].classList.remove('hide');

        let list = quizItem[i].parentNode.previousElementSibling;
        list.appendChild(quizItem[i]);
    }
}
