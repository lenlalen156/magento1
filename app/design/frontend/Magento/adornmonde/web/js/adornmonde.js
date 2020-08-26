
require(['jquery'], function($){
    $(document).ready(function () {
        removeClass();
    });
    $(window).resize(function () {
        removeClass();
    });
    function removeClass() {
        console.log($(window).width());
        console.log(screen.height);
        console.log(screen.width);
        if($(window).width() <768){
            $('#switcher-currency-trigger').addClass('d-none');
            $('#switcher-language').addClass('d-none');
            $('.header.links').addClass('d-none');
            $('#cart-show').addClass('d-none');
            $('#search-show').addClass('d-none');
            $('#search-hidden').removeClass('d-none');
            $('#cart-hidden').removeClass('d-none');
            $('.navigation').addClass('d-none');
            $('.nav.item.current').addClass('d-none');
        }else{
            $('#switcher-currency-trigger').removeClass('d-none');
            $('#switcher-language').removeClass('d-none');
            $('.header.links').removeClass('d-none');
            $('#cart-show').removeClass('d-none');
            $('#search-show').removeClass('d-none');
            $('#search-hidden').addClass('d-none');
            $('#cart-hidden').addClass('d-none');
            $('.navigation').removeClass('d-none');
            $('.nav.item.current').removeClass('d-none');
        }
    }
});




// if ($(window).width() <= 768) {
//         //     $('#order-1').addClass('order-1');
//         //     $('#order-2').addClass('order-2');
//         //     $('#order-3').addClass('order-3');
//         //     $('#order-4').addClass('order-4');
//         //     $('#order-5').addClass('order-5');
//         //     $('#p-content-5').addClass('order-2');
//         //     $('#img-content-5').addClass('order-1');
//         //     $('#ul-1-content-3').addClass('w-100');
//         //     $('#ul-2-content-3').addClass('w-100');
//         //     $('.content-4-1').addClass('p-0');
//         //     $('#activity-block-title').removeClass('text-center');
//         // } else {
//         //     $('#order-1').removeClass('order-1');
//         //     $('#order-2').removeClass('order-2');
//         //     $('#order-3').removeClass('order-3');
//         //     $('#order-4').removeClass('order-4');
//         //     $('#order-5').removeClass('order-5');
//         //     $('#p-content-5').removeClass('order-2');
//         //     $('#img-content-5').removeClass('order-1');
//         //     $('#ul-1-content-3').removeClass('w-100');
//         //     $('#ul-2-content-3').removeClass('w-100');
//         //     $('.content-4-1').removeClass('p-0');
//         //     $('#activity-block-title').addClass('text-center');
//         // }