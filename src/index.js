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
    $('.product-option input[type="radio"]').on('change', function () {
        $(this).parents('.product-option').siblings().removeClass('active');
        $(this).parents('.product-option').addClass('active');

    });
    $('[data-product-quantity]').on('change', function () {
        var newQuantity = $(this).val();
        var parent = $(this).parents('[data-product-info]');
        var pricePerUnit = parent.attr('data-product-price');
        var totalPriceForProduct = newQuantity * pricePerUnit;
        parent.find('.total-price-for-product').text(totalPriceForProduct + '$');
        calculateTotalPrice();
    });
    $('[data-remove-from-cart]').click(function () {
        $(this).parents('[data-product-info]').remove();
        calculateTotalPrice();
    })
    function calculateTotalPrice() {

        var totalPriceForAllProducts = 0;

        $('[data-product-info]').each(function () {

            var pricePerUnit = $(this).attr('data-product-price');
            var quantity = $(this).find('[data-product-quantity]').val();
            var totalPriceForProduct = pricePerUnit * quantity;
            totalPriceForAllProducts = totalPriceForAllProducts + totalPriceForProduct;
            console.log(quantity);
        });
        $('#total-price-for-all-products').text(totalPriceForAllProducts + '$');
    }
});
