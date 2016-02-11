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
}
