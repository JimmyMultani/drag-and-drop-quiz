import $ from 'jquery';
window.jQuery = $;

import pageTransitions from '../modules/pageTransitions.js';
import dragAndDrop from '../modules/dragAndDrop.js';

export default function() {
    console.log('home');

    pageTransitions();
    dragAndDrop();

    addListeners();
}

let addListeners = function() {
    $('.quiz__radio input[type="radio"]').on('change', function() {
        console.log($(this).closest('.quiz__container').find('.quiz__next'));

        if (this.value !== null) {
            $(this).closest('.quiz__container').find('.quiz__next').removeAttr('disabled');
        }
    });
}
