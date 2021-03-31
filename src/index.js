import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

import './css/style.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import '@fortawesome/fontawesome-free/js/all.js';

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('.add-card-btn').click(function () { alert('added') });
    $(".copyright").text("جميع الحقوق محفوظة للمتجر سنه " + new Date().getFullYear());
    $('.product-option input[type="radio"]').click(function () {
        $(this).parents('.product-option').siblings().removeClass('active');
        $(this).parents('.product-option').addClass('active');

    });
});
