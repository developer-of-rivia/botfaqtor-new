$('.btf__login-container').click(function () {
    $(this).toggleClass('btf__active-login');
});

$('.btf__block-balance-col').click(function () {
    $(this).toggleClass('btf__active-login');
});

//скрываем-показываем панель меню
$(".btf__icon-hidden-menu").click(function () {
    $(".btf__sidebar").toggleClass("btf__expand");
    $(this).toggleClass("btf__close-ico");
});


// Фокусируем placeholder при клике на поле или, если поле заполнено.
$('.btf__cdInputFix input, .btf__cdInputFix textarea').each(function () {
    var inpPar2 = $(this).val();
    if (inpPar2.length != 0) {
        $(this).parent().addClass('btf__goodfocus');
    }
});
$('.btf__cdInputFix input, .btf__cdInputFix textarea').on('focus', function () {
    $(this).parent().addClass('btf__goodfocus');
}).on('blur', function () {
    $(this).parent().removeClass('btf__goodfocus');
    var inpPar = $(this).val();
    if (inpPar.length != 0) {
        $(this).parent().addClass('btf__goodfocus');
    }
});

$(".btf__autopay-op [type='checkbox']").on('change', function () {
    if ($(this).is(':checked')) {
        $('.btf__autopay').addClass('btf__open');
    } else {
        $('.btf__autopay').removeClass('btf__open');
    }
});

$(".btf__autopay-edo [type='checkbox']").on('change', function () {
    if ($(this).is(':checked')) {
        $('.btf__autopay').removeClass('btf__open');
        $('.btf__edoblock').addClass('btf__open');
    } else {
        $('.btf__autopay').addClass('btf__open');
        $('.btf__edoblock').removeClass('btf__open');
    }
});


makeAccordion();
$('.btf__pay-method').click(function () {
    $('.btf__pay-method').each(function () {
        $(this).removeClass('btf__active-header');
    });
    $(this).addClass('btf__active-header');
    makeAccordion();
});

function makeAccordion() {
    var speed = 300;
    $('.btf__pay-method').each(function () {
        if ($(this).hasClass('btf__active-header')) {
            $(this).find('.btf__pay-content').addClass('btf__open-content');
        } else {
            $(this).find('.btf__pay-content').removeClass('btf__open-content');
        }
    });
}

$(window).scroll(function () {
    if ($(this).scrollTop() > 60) {
        $('.btf__sidebar').addClass('btf__sedetop');
    } else {
        $('.btf__sidebar').removeClass('btf__sedetop');
    }
});

if ($(this).scrollTop() > 60) {
    $('.btf__sidebar').addClass('btf__sedetop');
} else {
    $('.btf__sidebar').removeClass('btf__sedetop');
}


var opened = false;
$("[data-bem]").click(function (e) {



    if ($(this).hasClass("btf__tooltip") == true) {
        $(this).addClass("btf__active");
    }
    var X = e.pageX; // положения по оси X
    var XTail = 100; // положения по оси X
    var Y = e.pageY + 20; // положения по оси Y
    var T = $(this).attr("data-bem");
    //if (!opened) {
        $(".btf__popup__content__quest .btf__popup__content").html(T);
        $(".btf__popup__content__quest").addClass("btf__open");
        var width_popup = $(".btf__popup__content__quest").width();
        $(".btf__popup__tail").css("left", +((width_popup + 2) / 2) - 17 + "px");

        $(".btf__popup__content__quest").css("top", Y + "px").css("left", X - width_popup / 2 + "px");
        setTimeout(function () {
            var opened = false;
        }, 100);
    //} else {
    //    alert();
    //    $(".popup__content__quest").removeClass("open");
    //    $(".popup__content__quest").removeAttr('style');
    //    $(".popup__content__quest .popup__content").html(false);
    //    $(this).hasClass("tooltip").removeClass("active");
    //}
    opened = !opened;
    return false;
});

$(document).mouseup(function (e) {
    var div = $(".btf__popup__content__quest");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        div.removeClass("btf__open").removeAttr('style');
        $(".btf__popup__content__quest .btf__popup__content").html(false);
        $("[data-bem]").removeClass("btf__active");
    }
});