$(function () {
    fixedHeader($("header"));
    fnav($('nav a:eq(0)'));

    

    $('.menu_mob ul li a').click(function(e) {
        e.preventDefault();
    });

    $('.menu_burger').click(function(e) {
        $('.menu_mob').addClass('active');
        e.preventDefault();
    });
    $('.close_menu').click(function(e) {
        $('.menu_mob').removeClass('active');
        e.preventDefault();
    });




    // CALC
    $('#output_1').val($('[type="range"]#calc_input_1').val());
    $('[type="range"]#calc_input_1').mousemove(function () {
        $('#output_1').val($(this).val());
    });
    $('#output_1').change(function () {
        $('[type="range"]#calc_input_1').val($(this).val());
    });
    $('#output_2').val($('[type="range"]#calc_input_2').val());
    $('[type="range"]#calc_input_2').mousemove(function () {
        $('#output_2').val($(this).val());
    });
    $('#output_2').change(function () {
        $('[type="range"]#calc_input_2').val($(this).val());
    });
    $('#output_3').val($('[type="range"]#calc_input_3').val());
    $('[type="range"]#calc_input_3').mousemove(function () {
        $('#output_3').val($(this).val());
    });
    $('#output_3').change(function () {
        $('[type="range"]#calc_input_3').val($(this).val());
    });


    //Accordion FAQ
    $('.accordion-header').toggleClass('inactive-header');
    var contentwidth = $('.accordion-header').width();
    $('.accordion-content').css({
        'width': contentwidth
    });
    $('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
    $('.accordion-content').first().slideDown('122').toggleClass('open-content');
    $('.accordion-header').click(function () {
        if ($(this).is('.inactive-header')) {
            $('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
            $(this).toggleClass('active-header').toggleClass('inactive-header');
            $(this).next().slideToggle().toggleClass('open-content');
        } else {
            $(this).toggleClass('active-header').toggleClass('inactive-header');
            $(this).next().slideToggle().toggleClass('open-content');
        }
    });
    return false;
});



function graphValue(e) {
    e.each(function () {
        var x = $(this).data('width') + '%';
        $(this).children('.graph-label').animate({
            'width': x
        }, 1500); 
    });
}

function fixedHeader(h) {
    if (typeof h !== "undefined") {
        var pos = h.innerHeight(),
            w = $(window);
        b = $('header');
        w.on("scroll", function () {
            w.scrollTop() >= pos ? b.addClass("fixed") : b.removeClass("fixed");
        });
    }
}


// floating nav underscore
function fnav(e) {
    f = $('nav .nav-float');
    p = e.position().left;
    w = e.innerWidth();
    f.css({
        'left': p,
        'width': w
    });
}

jQuery(document).ready(function($) {
    // Фокусируем placeholder при клике на поле или, если поле заполнено.
    $('.cdInputFix input, .cdInputFix textarea').each(function(){ var inpPar2 = $(this).val(); if(inpPar2.length != 0) {$(this).parent().addClass('goodfocus');} });
    $('.cdInputFix input, .cdInputFix textarea').on('focus', function() {
        $(this).parent().addClass('goodfocus');
    }).on('blur', function() {
        $(this).parent().removeClass('goodfocus');
        var inpPar = $(this).val();
        if(inpPar.length != 0) {
            $(this).parent().addClass('goodfocus');
        }
    });
});