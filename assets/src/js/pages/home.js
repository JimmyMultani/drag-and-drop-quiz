import $ from 'jquery';
import dragula from 'dragula';
window.jQuery = $;
window.dragula = dragula;

export default function() {
    console.log('home');

    dragula([
        document.getElementById('top-defaults'),
        document.getElementById('bottom-defaults')
    ]);
}
