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
});
