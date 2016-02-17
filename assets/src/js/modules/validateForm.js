import $ from 'jquery';
window.jQuery = $;

export default function() {
    console.log('validateForm()');

    addListeners();
}

let addListeners = function() {
    $('#form--email').on('submit', function(event) {
        event.preventDefault;

        let email = $('input[type="email"]').val();

        if (validateEmail(email)) {
            submitForm();

            // submit email information
            console.log('submit email information');

            let pageId = $(this).closest('.quiz__container').data('page');

            hideQuizSlide(pageId);

            pageId++;

            showQuizSlide(pageId);
        } else {
            showFormErrors();
        }

        return false;

    });
}

let validateEmail = function(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

let showFormErrors = function() {
    console.log('email is incorrect');
}

let hideFormErrors = function() {

}

let submitForm = function() {

}
