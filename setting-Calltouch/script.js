
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