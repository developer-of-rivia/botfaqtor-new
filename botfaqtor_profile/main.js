//боковая панель детализации маршрута
jQuery(document).ready(function ($) {
    //open the lateral panel
    $('.panel-open').on('click', function (event) {
        event.preventDefault();
        $('.slide-panel').addClass('is-visible');
    });
    //close the lateral panel
    $('.slide-panel').on('click', function (event) {
        if ($(event.target).is('.slide-panel') || $(event.target).is('.panel-close')) {
            $('.slide-panel').removeClass('is-visible');
            event.preventDefault();
        }
    });

    $('.accordion-tabs').children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
    $('.accordion-tabs').on('click', 'li > a', function (event) {
        if (!$(this).hasClass('is-active')) {
            event.preventDefault();
            $('.accordion-tabs .is-open').removeClass('is-open').hide();
            $(this).next().toggleClass('is-open').toggle();
            $('.accordion-tabs').find('.is-active').removeClass('is-active');
            $(this).addClass('is-active');
        } else {
            event.preventDefault();
        }
    });


    $('.wiz-bill li.item').click(function (event) {
        if (!$(this).hasClass('active')) {
            var i = $(this).index();
            event.preventDefault();
            $('.wiz-bill').find('.active').removeClass('active');
            $(this).addClass('active');
            $(".cont-wiz-bill.is-open").removeClass("is-open");
            $($(".cont-wiz-bill")[i]).addClass("is-open");
            if(i == 1){
                $(".sevenday").addClass("is-open");
            }else{
                $(".sevenday").removeClass("is-open");
            }
        } else {
            event.preventDefault();
        }
    });

    $('.pay-method').click(function (event) {
        if (!$(this).hasClass('active-header')) {
            var i = $(this).index();
            $('.col-sm-6').find('.active-header').removeClass('active-header');
            $(this).addClass('active-header');
            $(".pay-method .pay-content.open-content").removeClass("open-content");
            $($(".pay-method .pay-content")[i]).addClass("open-content");
        }
    });

    $('.wizard li.item').click(function (event) {
        if (!$(this).hasClass('active')) {
            var i = $(this).index();
            event.preventDefault();
            $('.wizard').find('.active').removeClass('active');
            $(this).addClass('active');

            $(".contener-wizard.is-open").removeClass("is-open");
            $($(".contener-wizard")[i]).addClass("is-open");
        } else {
            event.preventDefault();
        }
    });

    $('#L2').click(function (event) {
        $('.wizard').find('.active').removeClass('active');
        $(".wizard .item").eq(1).addClass('active');
        $('.contener-wizard').removeClass('is-open');
        $('#bt2').addClass('is-open');
        event.preventDefault();
    });

    $('#L3').click(function (event) {
        $('.wizard').find('.active').removeClass('active');
        $(".wizard .item").eq(2).addClass('active');
        $('.contener-wizard').removeClass('is-open');
        $('#bt3').addClass('is-open');
        event.preventDefault();
    });

    $('#L4').click(function (event) {
        $('.wizard').find('.active').removeClass('active');
        $(".wizard .item").eq(3).addClass('active');
        $('.contener-wizard').removeClass('is-open');
        $('#bt4').addClass('is-open');
        event.preventDefault();
    });

    $('#L5').click(function (event) {
        $('.wizard').find('.active').removeClass('active');
        $(".wizard .item").eq(4).addClass('active');
        $('.contener-wizard').removeClass('is-open');
        $('#bt5').addClass('is-open');
        event.preventDefault();
    });



    $('#R1').click(function (event) {
        $('.wizard').find('.active').removeClass('active');
        $(".wizard .item").eq(0).addClass('active');

        $('.contener-wizard').removeClass('is-open');
        $('#bt1').addClass('is-open');
        event.preventDefault();
    });
    $('#R2').click(function (event) {
        $('.wizard').find('.active').removeClass('active');
        $(".wizard .item").eq(1).addClass('active');

        $('.contener-wizard').removeClass('is-open');
        $('#bt2').addClass('is-open');
        event.preventDefault();
    });
    $('#R3').click(function (event) {
        $('.wizard').find('.active').removeClass('active');
        $(".wizard .item").eq(2).addClass('active');


        $('.contener-wizard').removeClass('is-open');
        $('#bt3').addClass('is-open');
        event.preventDefault();
    });
    $('#R4').click(function (event) {
        $('.wizard').find('.active').removeClass('active');
        $(".wizard .item").eq(3).addClass('active');


        $('.contener-wizard').removeClass('is-open');
        $('#bt4').addClass('is-open');
        event.preventDefault();
    });




    $("#switch1").on('change', function () {
        if ($(this).is(':checked')) {
            $('#bt1 .container-table').removeClass('is-open');
            $('#bt1 .total-blocks').removeClass('is-open');
            $('#bt1 .switchblock').removeClass('open');
            $('#bt1 .switchblock').addClass('close');
            $('#bt1 .switchblock span').text('Заблокировать свой список страниц');
            $('#bt1 .mess-all').addClass('is-open');
            $('#bt1 .add-page-blocks').removeClass('is-open');
        } else {
            $('#bt1 .container-table').addClass('is-open');
            $('#bt1 .total-blocks').addClass('is-open');
            $('#bt1 .switchblock').removeClass('close');
            $('#bt1 .switchblock').addClass('open');
            $('#bt1 .switchblock span').text('Заблокировать все страницы');
            $('#bt1 .mess-all').removeClass('is-open');
            $('#bt1 .add-page-blocks').addClass('is-open');
        }
    });

    $("#switch2").on('change', function () {
        if ($(this).is(':checked')) {
            $('#bt2 .container-table').removeClass('is-open');
            $('#bt2 .total-blocks').removeClass('is-open');
            $('#bt2 .switchblock').removeClass('open');
            $('#bt2 .switchblock').addClass('close');
            $('#bt2 .switchblock span').text('Выбрать типы ботов для блокировки');
            $('#bt2 .mess-all').addClass('is-open');
        } else {
            $('#bt2 .container-table').addClass('is-open');
            $('#bt2 .total-blocks').addClass('is-open');
            $('#bt2 .switchblock').removeClass('close');
            $('#bt2 .switchblock').addClass('open');
            $('#bt2 .switchblock span').text('Заблокировать все типы ботов');
            $('#bt2 .mess-all').removeClass('is-open');
        }
    });

    $("#switch3").on('change', function () {
        if ($(this).is(':checked')) {
            $('#bt3 .container-table').removeClass('is-open');
            $('#bt3 .total-blocks').removeClass('is-open');
            $('#bt3 .switchblock').removeClass('open');
            $('#bt3 .switchblock').addClass('close');
            $('#bt3 .switchblock span').text('Выбрать свой список источников');
            $('#bt3 .mess-all').addClass('is-open');
        } else {
            $('#bt3 .container-table').addClass('is-open');
            $('#bt3 .total-blocks').addClass('is-open');
            $('#bt3 .switchblock').removeClass('close');
            $('#bt3 .switchblock').addClass('open');
            $('#bt3 .switchblock span').text('Заблокировать все источники');
            $('#bt3 .mess-all').removeClass('is-open');
        }
    });

    $("#switch4").on('change', function () {
        if ($(this).is(':checked')) {
            $('#bt4 .container-table').removeClass('is-open');
            $('#bt4 .total-blocks').removeClass('is-open');
            $('#bt4 .switchblock').removeClass('open');
            $('#bt4 .switchblock').addClass('close');
            $('#bt4 .switchblock span').text('Выбрать свой список геотаргетинга');
            $('#bt4 .mess-all').addClass('is-open');
        } else {
            $('#bt4 .container-table').addClass('is-open');
            $('#bt4 .total-blocks').addClass('is-open');
            $('#bt4 .switchblock').removeClass('close');
            $('#bt4 .switchblock').addClass('open');
            $('#bt4 .switchblock span').text('Заблокировать весь геотаргетинг');
            $('#bt4 .mess-all').removeClass('is-open');
        }
    });


   
    $(".autopay-op [type='checkbox']").on('change', function () {
        if ($(this).is(':checked')) {
            $('.autopay').addClass('open');
        } else {
            $('.autopay').removeClass('open');
        }
    });



    // Фокусируем placeholder при клике на поле или, если поле заполнено.
    $('.cdInputFix input, .cdInputFix textarea').each(function () { var inpPar2 = $(this).val(); if (inpPar2.length != 0) { $(this).parent().addClass('goodfocus'); } });
    $('.cdInputFix input, .cdInputFix textarea').on('focus', function () {
        $(this).parent().addClass('goodfocus');
    }).on('blur', function () {
        $(this).parent().removeClass('goodfocus');
        var inpPar = $(this).val();
        if (inpPar.length != 0) {
            $(this).parent().addClass('goodfocus');
        }
    });




 

});

//скрываем-показываем панель меню
$(".icon-hidden-menu").click(function () {
    $(".sidebar").toggleClass("expand");

    $(this).toggleClass("close-ico");
});



$(".filter-menu").click(function () {
    $(".site-web-filter").toggleClass("expand");
    $(this).toggleClass("active-filt");
});
//добавляем - убираем клас поклику на li
$('.item-list').click(function () {
    $(this).toggleClass('active');
});

$(".filter-date .item-list").click(function () {
    var $current = $('.filter-date .item-list.active');
    $current.removeClass('active');
    $current.next('.content-block').addClass('active');
});


$('.dropdown').click(function () {
    $(this).toggleClass('is-open-dropdown');
});


$('.login-container').click(function () {
    $(this).toggleClass('active-login');
});


$('.site-name-info').click(function () {
    $(this).toggleClass('active-stat');
});


$('.block-balance-col').click(function () {
    $(this).toggleClass('active-login');
});

$('.user-menu-content').click(function () {
    $(".user-menu").toggleClass('active-login');
});

$('.demo').click(function () {
    $('.viewbox').addClass('open-view');
});

$('.first-page .viewbox .popup-window .close-w').click(function () {
    $('.viewbox').removeClass('open-view');
});

$('.view-bg').click(function () {
    $('.viewbox').removeClass('open-view');
});

$('.what-types-camp').click(function () {
    $(this).toggleClass('active');
});

// Раскрытие меню 
$(function () {
    $('.mobi-nav-proj').on('click', function (e) {
    
            e.preventDefault();
            $('.nav-proj').toggleClass('active');
    
    });
});

// Dropdown
$(function () {
    $('.custdown').on('click', '.custdown-placeholder', function () {
        v = $(this).children('.item');
        $(this).toggleClass('active');
        $('.custdown-select').on('click', '.item', function () {
            o = $(this).text();
            v.text(o);
            v.parent('.custdown-placeholder').removeClass('active');
        });
    });
});








// Логика для фикс шапки таблицы headTableFix и sidebar
// 25.12.2018
$(window).scroll(function () {
    if ($(this).scrollTop() > 60) {
        $(".my-url .col-12.fcd").addClass("fix");
        $(".my-url").addClass("hits");
    } else {
        $(".my-url .col-12.fcd").removeClass("fix");
        $(".my-url").removeClass("hits");
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
        $('.sidebar').addClass('sedetop');
    } else {
        $('.sidebar').removeClass('sedetop');
    }

    var tableTop = $('.mt-2 tbody').offset().top;
    
    if ($(this).scrollTop() > tableTop) {
        $('.headTableFix').addClass('theadactive');
    } else {
        $('.headTableFix').removeClass('theadactive');
    }
});




//


// 18.01.2019
// Меню проектов
$(".menu-project li").click(function () {
    $(".m-dropdown-proj").toggleClass("expand-proj");
    $(this).toggleClass("active");
});



// 01.03.2019

function alertfixedwarning() {
    $('.alert-fixed-warning').addClass('open');
}
setTimeout(alertfixedwarning, 1000);



 // Выбор http или https
 var http = $("button#prefixURL").text();

 $("button#prefixURL").click(function () {
     $('.dropdown-menu-prefix').addClass('show');
     return false;
 });

 $("[name='prefixURLDropDown']").click(function () {
     $("button#prefixURL").text($(this).text());
     $("[name='prefixURLDropDown']").text(http);

     $('.dropdown-menu-prefix').removeClass('show');
     return false;
 });


 var opened = false;
 $("[data-bem]").click(function (e) {

    if($(this).hasClass("tooltip") == true){
        $(this).addClass("active");
    }
    
     var X = e.pageX; // положения по оси X
     var XTail = 100; // положения по оси X
     var Y = e.pageY+20; // положения по оси Y
     var T = $(this).attr("data-bem");

     if (!opened) {
        $(".popup__content__quest .popup__content").html(T);
         $(".popup__content__quest").addClass("open");
         var width_popup = $(".popup__content__quest").width();
         $(".popup__tail").css("left", +((width_popup+2)/2)-17+"px");
         
         $(".popup__content__quest").css("top", Y + "px").css("left", X-width_popup/2 + "px");
         setTimeout(function () {
             var opened = false;
         }, 100);
     } else {

         $(".popup__content__quest").removeClass("open");
         $(".popup__content__quest").removeAttr('style');
         $(".popup__content__quest .popup__content").html(false);
         $(this).hasClass("tooltip").removeClass("active");
     }
     opened = !opened;

     return false;
 });

 $(".tagadd").click(function (e) {

    if($(this).hasClass("tooltip") == true){
        $(this).addClass("active");
    }
    
     var X = e.pageX; // положения по оси X
     var XTail = 100; // положения по оси X
     var Y = e.pageY+20; // положения по оси Y

     if (!opened) {
         $(".popup__content__quest").addClass("open");
         var width_popup = $(".popup__content__quest").width();
         $(".popup__tail").css("left", +((width_popup+2)/2)-17+"px");
         
         $(".popup__content__quest").css("top", Y + "px").css("left", X-width_popup/2 + "px");
         setTimeout(function () {
             var opened = false;
         }, 100);
     } else {

         $(".popup__content__quest").removeClass("open");
         $(".popup__content__quest").removeAttr('style');
         $(this).hasClass("tooltip").removeClass("active");
     }
     opened = !opened;

     return false;
 });




 $(document).mouseup(function (e) {
     var div = $(".popup__content__quest");
     if (!div.is(e.target) && div.has(e.target).length === 0) {
         div.removeClass("open").removeAttr('style');
         $(".popup__content__quest .popup__content").html(false);
         $("[data-bem]").removeClass("active");
     }
 });


 $('.option').click(function () {
    $(".addlinkurl").toggleClass('open');
});


$(".addlinkurl input[type='checkbox']").on('change', function () {
    if ($(this).is(':checked')) {
        $(".my-url .addlinkurl textarea").addClass("alls");
        $(".addlinkurl").toggleClass('openalls');
        $(".my-url .addlinkurl .urltim .placehold").text("Введите до 10 ссылок");
    }else{
        $(".my-url .addlinkurl textarea").removeClass("alls");
        $(".addlinkurl").toggleClass('openalls');
        $(".my-url .addlinkurl .urltim .placehold").text("Укажите длинный URL");

    }
});



$('.tab-head #t1').click(function (event) {
    $('.tab-head .title-sett').removeClass('active');
    $('.tab-sett').removeClass('active');

    $('.tab-sett#t1').addClass('active');
    $('.tab-head .title-sett#t1').addClass('active');
    event.preventDefault();
});

$('.tab-head #t2').click(function (event) {
    $('.tab-head .title-sett').removeClass('active');
    $('.tab-sett').removeClass('active');

    $('.tab-sett#t2').addClass('active');
    $('.tab-head .title-sett#t2').addClass('active');
    event.preventDefault();
});

$('.tab-head #t3').click(function (event) {
    $('.tab-head .title-sett').removeClass('active');
    $('.tab-sett').removeClass('active');

    $('.tab-sett#t3').addClass('active');
    $('.tab-head .title-sett#t3').addClass('active');
    event.preventDefault();
});



$('.content-mysite .del').click(function (event) {
    $(".awesome-modal").addClass("open")
    event.preventDefault();
});

$('.awesome-modal .close-icon').click(function (event) {
    $(".awesome-modal").removeClass("open")
    event.preventDefault();
});







$(".edo-click input[type='checkbox']").on('change', function () {
    if ($(this).is(':checked')) {
        $(".edo").addClass("op-b");
        $(".not-edo").removeClass("op-b");
    }else{
        $(".edo").removeClass("op-b");
        $(".not-edo").addClass("op-b");
    }
});