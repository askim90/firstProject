$(document).ready(function() {
    $('.setData').on('click', function() {
        let textFieldValue = $('.name').val();
        let textareaValue = $('textarea').val();
        //$('.debug').text(textFieldValue);
        localStorage.setItem(textFieldValue, textareaValue);
    });

    $('.getData').on('click', function() {
        let textFieldValue = $('.name').val();
        let retrievedData = localStorage.getItem(textFieldValue);
        $('.output').text(retrievedData);
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
            $('#display').append(`<li>${e}</li>`);
            $('#display').append(`<pre><code>${code}</code></pre>`);
        });
    });
    // $('.textField').on('keyup', function() {
    //     let textFieldValue = $('.textField').val();
    //     $('.debug').text(textFieldValue);
    // });
});