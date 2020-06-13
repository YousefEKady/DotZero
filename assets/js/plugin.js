// Carousel in Home Page
$('.cat').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    rtl: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: true
        },
        1000: {
            items: 4,
            nav: true
        }
    }
});
// Tabs in order Page
$(function () {
    $(".clickable").on('click', function () {
        $(".nav-item").removeClass("disabled");
        $(".n-ship").removeClass("show active");
        $(".n-pay").addClass("show active");
        $(".n-pay-tab").addClass("active");
        $(".ship-text").hide();
        $(".pay-text").show();
    });
});
$(function () {
    $(".prevClick").on('click', function () {
        $(".n-pay").removeClass("show active");
        $(".n-ship").addClass("show active");
        $(".ship-text").show();
        $(".pay-text").hide();
    });
});
// Ajax Load in order page
$(function () {
    $(".btn-data").on("click", function () {
        $(".body").load($(this).data("page"));
    });
});
// Confirm button in checkout page
$(function () {
    $(".confirm-btn").on("click", function () {
        $(".confirm-btn").hide();
        $(".strong-block").show(4000);
    });
});
// Range Slider in Products Page
$(document).ready(function () {
    $("#rangeslider").kendoRangeSlider({
        min: 0,
        max: 5000,
        smallStep: 1,
        largeStep: 2,
        tickPlacement: "both"
    });
});
// Validation Form
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();