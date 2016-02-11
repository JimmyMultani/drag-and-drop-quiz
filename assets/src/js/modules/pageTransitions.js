import $ from 'jquery';

export default function() {
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

        resetQuiz();
    });
}

function hideQuizSlide(pageId) {
    let quizSlide = document.getElementById('quiz--' + pageId);

    quizSlide.classList.remove('active');
    setTimeout( () => {
        quizSlide.style.display = 'none';
    }, 400);
}

function showQuizSlide(pageId) {
    let quizSlide = document.getElementById('quiz--' + pageId);

    quizSlide.style.display = 'block';

    setTimeout( () => {
        quizSlide.classList.add('active');

        if ($('#quiz--' + pageId).hasClass('quiz__end')) {
            setTimeout(() => {
                resetQuiz();
            }, 15000);
        }
    }, 400);
}

function resetQuiz() {
    hideQuizSlide(6);
    showQuizSlide(1);

    // reset radio submits
    let radioSubmit = document.querySelectorAll('.quiz__radio .quiz__next');

    for (var i = 0; i < radioSubmit.length; i++) {
        radioSubmit[i].setAttribute('disabled', 'disabled');
    }
}
