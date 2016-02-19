import $ from 'jquery';
window.jQuery = $;

var globalVars = window.globalVars = {
    resetTimer: null,
    count: 0
};

import testConnection from '../modules/testConnection.js';
import {showQuizSlide, hideQuizSlide} from '../modules/pageTransitions.js';
import resetQuiz from '../modules/resetQuiz.js';
import dragAndDrop from '../modules/dragAndDrop.js';

export default function() {
    console.log('home');

    testConnection();
    addListeners();
}

let addListeners = function() {
    var resetButton = document.querySelectorAll('.quiz__reset'),
        radioButtons = document.querySelectorAll('input[type="radio"]'),
        nextButton = document.querySelectorAll('.quiz__next');

    $(nextButton).on('click', function(event) {
        event.preventDefault;

        let pageId = this.closest('.quiz__container').getAttribute('data-page');

        hideQuizSlide(pageId);

        pageId++;

        showQuizSlide(pageId);
    });

    $(resetButton).on('click', function() {
        // console.log(this.parentNode);

        window.clearTimeout(globalVars.resetTimer);

        resetQuiz();
    });

    $(radioButtons).on('change', function() {
        console.log($(this).closest('.quiz__container').find('.quiz__next'));

        if (this.value !== null) {
            $(this).closest('.quiz__container').find('.quiz__next').removeAttr('disabled');
        }
    });
}
