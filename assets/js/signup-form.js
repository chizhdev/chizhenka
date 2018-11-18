'use strict';

// Signup Form validation
window.addEventListener('load', function () {
    var form = document.getElementById('signupFrom');

    form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            var $form = $(this);
            var thanksString = '<div class="form-row pt-5"><div class="col-md-10 py-5"><h2 class="h2 text-purple mb-5">Спасибо! Мы получили заявку и&nbsp;свяжемся с&nbsp;вами в&nbsp;ближайшее время</h2><button type="button" class="btn btn-light btn-sm" data-dismiss="modal">Вернуться к сайту</button></div></div>';
            $.post($form.attr("action"), $form.serialize()).then(function () {
                $('#signupFrom').html(thanksString);
            });
        }
        form.classList.add('was-validated');
    }, false);
}, false);