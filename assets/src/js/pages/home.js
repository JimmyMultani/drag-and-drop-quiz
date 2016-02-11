import $ from 'jquery';
import dragula from 'dragula';

window.jQuery = $;
window.dragula = dragula;

import pageTransitions from '../modules/pageTransitions.js';

export default function() {
    console.log('home');

    pageTransitions();

    var drake = dragula([
        document.getElementById('top-defaults'),
        document.getElementById('bottom-defaults')
    ]);

    drake.on('drop', function(el, target, source, sibling) {
        console.log(el.parentNode);
        console.log(el, target, source, sibling);
        if (el.parentNode === document.getElementById('bottom-defaults')) {
            el.classList.add('hide');
            setTimeout( () => { el.style.display = 'none'; }, 400);
        }
    });

    $('.quiz__radio input[type="radio"]').on('change', function() {
        console.log($(this).closest('.quiz__container').find('.quiz__next'));

        if (this.value !== null) {
            $(this).closest('.quiz__container').find('.quiz__next').removeAttr('disabled');
        }
    });
}
