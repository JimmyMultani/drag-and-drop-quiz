import $ from 'jquery';

export default function() {
    // TODO: update url to email sender url
    $.ajax('http://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        data: {
            test: 1
        }
    }).fail(function(data) {
        console.log(data);

        $('body').addClass('no-connection');
    });
}
