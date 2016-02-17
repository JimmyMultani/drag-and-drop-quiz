import $ from 'jquery';
window.jQuery = $;

import {showQuizSlide, hideQuizSlide} from './pageTransitions.js';

export default function() {
    let quizSlides = document.querySelectorAll('.quiz__container');

    for (let i = 1; i <= quizSlides.length; i++) {
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

    // reset all checked radio buttons
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
