import "./scss/custom.scss";
import "./scss/style.scss";
import "@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css";
import 'webpack-jquery-ui';
import 'webpack-jquery-ui/css';
import 'bootstrap';
import "jquery/dist/jquery";
import "popper.js/dist/popper";
import "bootstrap/dist/js/bootstrap";
import "@fortawesome/fontawesome-free/js/all";
import "jquery-ui-touch-punch/jquery.ui.touch-punch.min.js";
import "./css/style.css";

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
    var citiesByCountry = {
        sa: ['جدة', 'الرياض'],
        eg: ['الاسكندرية', 'القاهرة'],
        jo: ['الزرقاء', 'عمان'],
        sy: ['حلب', 'دمشق']
    };
    $('#form-checkout select[name="country"]').change(function () {
        var country = $(this).val();
        var cities = citiesByCountry[country];
        $('#form-checkout select[name="city"]').empty();
        $('#form-checkout select[name="city"]').append(
            '<option disabled selected value="">اختر المدينة</option>'
        );
        cities.forEach(function (city) {
            var newOptiom = $('<option></option>');
            newOptiom.text(city);
            newOptiom.val(city);
            $('#form-checkout select[name="city"]').append(newOptiom);
        });
    });
    $('#form-checkout input[name="payment-method"]').change(function () {
        var paymentMethod = $(this).val();
        if (paymentMethod === 'on-delivery') {
            $('#credit-card-info-input').prop('disabled', true);
        } else {
            $('#credit-card-info-input').prop('disabled', false);
        }
        $('#credit-card-info').toggle();
    });
    $("#price-range").slider({
        range: true,
        min: 50,
        max: 1000,
        step: 50,
        values: [250, 800],
        slide: function (event, ui) {
            $('#price-min').text(ui.values[0]);
            $('#price-max').text(ui.values[1]);
        }
    });

});
