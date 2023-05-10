$(".nav-menu .close").click(function () {
    $(".nav-menu").removeClass("active");
});

$(".menu-burger").click(function () {
    $(".nav-menu").toggleClass("active");
});


$(".clicklogin").click(function () {
    location.href='https://botfaqtor.ru/signin';
    return false;
});


$(".click-project").click(function () {
    var click = "1";
    $(".project-title").toggleClass("is-open");
});

$(document).mouseup(function (e){
    var div = $(".project-title");
    if (!div.is(e.target) && div.has(e.target).length === 0) { 
        div.removeClass("is-open");
    }
});

$(".priceClick").click(function () {
    $(".nav-menu").removeClass("active");

	$('html,body').animate({
		scrollTop:$(".price").offset().top-60
	}, 500);
	return false;
});