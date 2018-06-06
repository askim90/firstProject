$(document).ready(function() {
    $('.setData').on('click', function() {
        let textFieldValue = $('.name').val();
        let textareaValue = $('textarea').val();
        localStorage.setItem(textFieldValue, textareaValue);
        $('#message').text(`Saved ${textFieldValue} successfully. Press 'Show All' to refresh.`);
    });

    $('.getData').on('click', function() {
        let textFieldValue = $('.name').val();
        let keys = [];
        
        for (let i = 0; i < localStorage.length; i++) {
            keys.push(localStorage.key(i));
        }

        if (keys.includes(textFieldValue)) {
            $('html, body').animate({
                scrollTop: $(`#${textFieldValue}`).offset().top
            }, 500);
        } else {
            $("#message").text(`Error: Could not find ${textFieldValue}.`);
        }

    });

    $('.showAll').click(function() {
        let keys = [];
        
        for (let i = 0; i < localStorage.length; i++) {
            keys.push(localStorage.key(i));
        }

        keys.sort();
        $('#display').html('');
        
        keys.forEach(e => {
            let code = localStorage.getItem(e);
            $('#display').append(`<li id="${e}">${e}</li>`);
            $('#display').append(`<pre><code>${code}</code></pre>`);
        });

        $('#message').text('Showing current list of snippets.');
    });

    $('.remove').click(function() {
        let textFieldValue = $('.name').val();
        let keys = [];
        
        for (let i = 0; i < localStorage.length; i++) {
            keys.push(localStorage.key(i));
        }

        if (keys.includes(textFieldValue)) {
            localStorage.removeItem(textFieldValue);
            $('#message').text(`Removed ${textFieldValue} successfully. Press 'Show All' to refresh.`);
        } else {
            $("#message").text(`Error: ${textFieldValue} does not exist.`);
        }
    });
});