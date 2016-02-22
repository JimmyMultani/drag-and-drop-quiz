import $ from 'jquery';

import interact from 'interact.js';

export default function() {
    console.log('dragAndDrop');

    init();
    addListeners();
}

let init = function() {
    let slider = document.querySelectorAll('.slider');

    // target elements with the "draggable" class
    interact('.draggable', {
        context: slider
    }).draggable({
        // enable inertial throwing
        // inertia: true,
        // keep the element within the area of it's parent
        restrict: {
            restriction: '.quiz__dnd',
            endOnly: true,
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
        // enable autoScroll
        autoScroll: true,

        // call this function on every dragmove event
        onmove: dragMoveListener
    });

    // enable draggables to be dropped into this
    interact('.dropzone').dropzone({
        // only accept elements matching this CSS selector
        // accept: '#yes-drop',
        // Require a 75% element overlap for a drop to be possible
        overlap: 0.75,

        // listen for drop related events:
        ondropactivate: function (event) {
            // add active dropzone feedback
            event.target.classList.add('drop-active');
        },
        ondragenter: function (event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;

            // feedback the possibility of a drop
            dropzoneElement.classList.add('drop-target');
            draggableElement.classList.add('can-drop');
            // draggableElement.textContent = 'Dragged in';
        },
        ondragleave: function (event) {
            // remove the drop feedback style
            event.target.classList.remove('drop-target');
            event.relatedTarget.classList.remove('can-drop');
            // event.relatedTarget.textContent = 'Dragged out';
        },
        ondrop: function (event) {
            // event.relatedTarget.textContent = 'Dropped';
        },
        ondropdeactivate: function (event) {
            // remove active dropzone feedback
            event.target.classList.remove('drop-active');
            event.target.classList.remove('drop-target');
        }
    });
}

let addListeners = function() {
    var resetButton = document.querySelectorAll('.drag-and-drop__reset')[0];
    console.log(resetButton);

    resetButton.addEventListener('click', function(event) {
        event.preventDefault();

        console.log(this);

        let items = $(this).siblings('.slider').find('.slider__item');
        console.log(items);

        items.removeAttr('style').removeAttr('data-x').removeAttr('data-y').removeClass('can-drop');

        return false;
    });
}

let dragMoveListener = function(event) {
    var target = event.target,
    // keep the dragged position in the data-x/data-y attributes
    x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
    y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}
