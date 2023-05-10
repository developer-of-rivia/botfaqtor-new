

$(".cl1").click(function () {
    $("li").removeClass("active");
    $(".tab").removeClass("active");
    $(this).addClass("active");
    $(".tb1").addClass("active");
});

$(".cl2").click(function () {
    $("li").removeClass("active");
    $(".tab").removeClass("active");
    $(this).addClass("active");
    $(".tb2").addClass("active");
});

$(".cl3").click(function () {
    $("li").removeClass("active");
    $(".tab").removeClass("active");
    $(this).addClass("active");
    $(".tb3").addClass("active");
});

$(".cl4").click(function () {
    $("li").removeClass("active");
    $(".tab").removeClass("active");
    $(this).addClass("active");
    $(".tb4").addClass("active");
});

$(".menu-burger").click(function () {
    $(".nav-menu").addClass("active");
});


$(".clicklogin").click(function () {
    location.href = 'https://botfaqtor.ru/signin';
    return false;
});


$(".click-project").click(function () {
    var click = "1";
    $(".project-title").toggleClass("is-open");
});

$(document).mouseup(function (e) {
    var div = $(".project-title");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        div.removeClass("is-open");
    }
});

$(".priceClick").click(function () {
    $('html,body').animate({
        scrollTop: $(".price").offset().top - 60
    }, 500);
    return false;
});

$(".projectClick").click(function () {
    $('html,body').animate({
        scrollTop: $(".project-screen").offset().top - 20
    }, 500);
    return false;
});





var kop = " коп";
var rub = " руб";

var antibotPriceB = "1.5";
var bannerPriceB = "1.5";
var antibotPriceV = "1";
var bannerPriceV = "1";

var directPriceB = "100";
var directPriceV = "70";

var adsPriceB = "100";
var adsPriceV = "70";



function ceilB(n) {
    hh = Math.ceil((n) * 100) / 100;
    return hh;
}




var thousandSeparator = function(str) {
    var parts = (str + '').split('.'),
        main = parts[0],
        len = main.length,
        output = '',
        i = len - 1;
    
    while(i >= 0) {
        output = main.charAt(i) + output;
        if ((len - i) % 3 === 0 && i > 0) {
            output = ' ' + output;
        }
        --i;
    }

    if (parts.length > 1) {
        output += '.' + parts[1];
    }
    return output;
};





$(".project .item").click(function () {
    classProj = $(this).attr("class");
    classProj = classProj.replace('item ', '');

    if (classProj == 'p01') {
        PriceB = antibotPriceB;
        PriceV = antibotPriceV;
        $(".baseTar .prcOP").html(PriceB + " " + kop);
        $(".vipTar .prcOP").html(PriceV + " " + kop);
    }

    if (classProj == 'p02') {
        PriceB = bannerPriceB;
        PriceV = bannerPriceV;
        $(".baseTar .prcOP").html(PriceB + " " + kop);
        $(".vipTar .prcOP").html(PriceV + " " + kop);

    }

    if (classProj == 'p03') {
        PriceB = directPriceB;
        PriceV = directPriceV;
        $(".baseTar .prcOP").html(PriceB / 100 + " " + rub);
        $(".vipTar .prcOP").html(PriceV + " " + kop);

    }

    if (classProj == 'p04') {
        PriceB = adsPriceB;
        PriceV = adsPriceV;
        $(".baseTar .prcOP").html(PriceB / 100 + " " + rub);
        $(".vipTar .prcOP").html(PriceV + " " + kop);
    }

    $(".calc-block .sum").removeClass("active");
    $(".project .item").removeClass("active");
    $("input[name='calc']").val(null);

    $(this).addClass("active");
    setTimeout($(".calc-block .calcu").addClass("active"), 400);
    return false;
});
$("input[name='calc']").keyup(function () {
    $(this).val(thousandSeparator($(this).val().replace(/[^0-9]/g, "")));
    $(".calc-block .sum").addClass("active");
    var value = $(this).val().replace(/\s/g, '');
    var sumBAse = value * PriceB;
    var sumVip = value * PriceV;
    if (sumBAse >= 100) {
        sumBAse = value * PriceB;
        r = rub;
        $(".baseTar .prcOkl").html(thousandSeparator(sumBAse / 100) + "" + r);
    } else {
        sumBAse = value * PriceB;
        r = kop;
        $(".baseTar .prcOkl").html(thousandSeparator(sumBAse) + "" + r);
    }
    if (sumVip >= 100) {
        sumVip = value * PriceV;
        r = rub;
        $(".vipTar .prcOkl").html(thousandSeparator(sumVip / 100) + "" + r);
        $(".vipTar .prcOklss").html(thousandSeparator((sumBAse - sumVip) / 100) + "" + r);
    } else {
        sumVip = value * PriceV;
        r = kop;
        $(".vipTar .prcOkl").html(thousandSeparator(sumVip) + "" + r);
        $(".vipTar .prcOklss").html(thousandSeparator(sumBAse - sumVip) + "" + r);
    }
});
