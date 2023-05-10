jQuery(document).ready(function ($) {
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


Object.defineProperty(window, "localStorage", new (function () {
    var aKeys = [],
        oStorage = {};
})());


var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

function getFormData($form) {
    var config = {};
    $form.serializeArray().map(function (item) {
        if (config[item.name]) {
            if (typeof (config[item.name]) === "string") {
                config[item.name] = [config[item.name]];
            }
            config[item.name].push(item.value);
        } else {
            config[item.name] = item.value;
        }
    });

    var Id = getUrlParameter("id");
    config["Id"] = Id;

    var Id = getUrlParameter("h");
    config["Href"] = Id;

    var Id = getUrlParameter("r");
    config["Ref"] = Id;

    return config;
}

function send_form(form_id) {

    $form = $('#' + form_id);
    var formData = JSON.stringify(getFormData($form));

    $(".btn-primary").attr("disabled", "true");

    console.log(formData);

    $.ajax({
        type: 'POST',
        url: 'http://api.selfdiag.ru/debugmail',
        contentType: 'application/json; charset=utf-8',
        cache: false,
        data: formData,
        success: function (data) {
            // запустится при успешном выполнении запроса и в data будет ответ скрипта
            $(".cont-pop-up .title").css("margin-bottom", "0");
            $(".cont-pop-up .title").html(
                "<span class='good-mess'>Данные отправлены, спасибо!</span>");
            $form.html(" ");
            $(".btn-primary").attr("disabled", "false");
        },
        error: function () {
            $(".cont-pop-up .title").css("margin-bottom", "0");
            $(".cont-pop-up .title").html("<span class='err-mess'>И тут ошибка! О_о</span>");
            $form.html(" ");
            $(".btn-primary").attr("disabled", "false");
        }
    });

}