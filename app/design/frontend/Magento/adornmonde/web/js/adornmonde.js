
require(['jquery'], function($){
    $(document).ready(function () {
        removeClass960();
        removeClass768();
    });
    $(window).resize(function () {
        removeClass960();
        removeClass768();
    });
    function removeClass960() {
        if ($(window).width() < 960) {
            $('#cart-show').addClass('d-none');
            $('#search-show').addClass('d-none');
            $('.link-text-icon').addClass('d-none');
            $('#search-hidden').removeClass('d-none');
            $('#cart-hidden').removeClass('d-none');
        } else {

            $('#cart-show').removeClass('d-none');
            $('#search-show').removeClass('d-none');
            $('.link-text-icon').removeClass('d-none');
            $('#search-hidden').addClass('d-none');
            $('#cart-hidden').addClass('d-none');
        }
    }

    function removeClass768() {
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
            $('.main-content-three-hidden').removeClass('d-none');
            $('.main-content-three-child-1-1').addClass('d-none');
            $('.main-content-three-child-2-1').addClass('d-none');
            $('.main-content-three-child-3-1').addClass('d-none');
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
            $('#main-content-three-hidden').addClass('d-none');
            $('.main-content-three-child-1-1').removeClass('d-none');
            $('.main-content-three-child-2-1').removeClass('d-none');
            $('.main-content-three-child-3-1').removeClass('d-none');
        }
    }
});




