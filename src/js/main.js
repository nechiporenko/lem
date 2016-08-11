// Application Scripts:

// Десктоп меню (выпадайки)
// Доп.меню на странице
// Мобильное меню
// Стилизуем хидер при скролле
// Форма поиска
// Маска для телефонного номера
// Стилизация Select
// Модальное окно
// Слайдер
// Вкладки
// Галерея
// Видео в модальном окне
// Скролл для фильтров каталога
// Покажем / спрячем фильтры каталога
// Подключим степперы для кол-ва товаров в корзине
// Калькулятор в корзине

jQuery(document).ready(function ($) {
    //Кэшируем
    var $window = $(window),
        $html=$('html'),
        $body = $('body');

    $body.append('<div id="overlay" class="overlay"></div>');
    var $overlay = $('#overlay');//оверлей

    //
    // Десктоп меню (выпадайки)
    //---------------------------------------------------------------------------------------
    (function () {
        var $menu = $('.js-menu li');
        $menu.has('ul').children('a').addClass('has-menu');
        $menu.on({
            mouseenter: function () {
                $(this).find('ul:first').stop(true, true).fadeIn('fast');
                $(this).find('a:first').addClass('hover');
            },
            mouseleave: function () {
                $(this).find('ul').stop(true, true).fadeOut('slow');
                $(this).find('a:first').removeClass('hover');
            }
        });
        $menu.on('click', '.has-menu', function (e) {//запретим клик по заголовку субменю
            e.preventDefault();
        });
    })();


    //
    // Доп.меню на странице
    //---------------------------------------------------------------------------------------
    function initPageMenu() {
        var $menu = $('.js-p-menu > ul'),
            $submenu = $menu.children('li').children('ul'),
            $btn = $menu.children('li').has('ul').addClass('has-menu').children('a').addClass('has-menu'),
            $toggle = $('.js-p-menu-toggle'),
            BREAKPOINT = 992,
            rtime, //переменные для пересчета ресайза окна с задержкой delta
            timeout = false,
            delta = 200,
            method = {};

        method.hideAllSubMenu = function () {//при клике по заголовку не активного меню, сперва спрячем все субменю
            var winW = $.viewportW();//ширина окна браузера
            $btn.removeClass('active');
            $submenu.slideUp(200);
        };

        method.hideSubMenu = function(el, target) {
            target.slideUp(200);
            el.removeClass('active');
        };

        method.showSubMenu = function (el, target) {
            target.slideDown(200);
            el.addClass('active');
        };

        method.hideMenu = function () {
            $toggle.removeClass('active');
            $menu.slideUp(200);
            method.hideAllSubMenu();
        };

        method.showMenu = function () {
            $toggle.addClass('active');
            $menu.slideDown(200);
        };

        method.clickSubMenuHeader = function (e) {//клик по заголовку субменю
            e.preventDefault();
            var $el = $(this),
                $target = $el.parent('li').find('ul:first');
            if ($el.hasClass('active')) {
                method.hideSubMenu($el, $target);
            } else {
                //method.hideAllSubMenu(); //если нужно показывать раскрытым только одно суб-меню - расскоментировать
                method.showSubMenu($el, $target);
            };
        };

        method.clickToggleButton = function () {//клик по кнопке меню на мобильных
            if ($toggle.hasClass('active')) {
                method.hideMenu();
            } else {
                method.showMenu();
            }
        };

        method.checkResolution = function () {//если изменилось разрешение экрана - сбрасываем
            var winW = $.viewportW();//ширина экрана
            if (winW >= BREAKPOINT) {
                method.hideAllSubMenu();
                $toggle.removeClass('active');
                $menu.show();
            };
        };

        method.endResize = function () {
            if (new Date() - rtime < delta) {
                setTimeout(method.endResize, delta);
            } else {
                timeout = false;
                //ресайз окончен - проверяем
                method.checkResolution();
            }
        };

        method.startResize = function () {
            rtime = new Date();
            if (timeout === false) {
                timeout = true;
                setTimeout(method.endResize, delta);
            }
        };

        
        $toggle.bind('click', method.clickToggleButton);//начинаем отслеживать клик по кнопке меню на мобильных
        $btn.bind('click', method.clickSubMenuHeader); //начинаем отслеживать клик по заголовкам субменю
        $window.bind('resize', method.startResize);//если переходим на десктоп - сбрасывем на дефолт

        $menu.find('li.has-menu').hover(function () {//на десктопе будем показывать субменю при наведении мышки
            var winW = $.viewportW();//ширина экрана
            if (winW >= BREAKPOINT) {
                $btn.unbind('click', method.clickSubMenuHeader).on('click', function (e) { e.preventDefault(); });//отключаем обработку клика, но оставляем заголовок некликабельным
                $(this).children('a').addClass('hover').next('ul:first').fadeIn(200);
            };
        }, function () {
            var winW = $.viewportW();
            if (winW >= BREAKPOINT) {
                $(this).children('a').removeClass('hover').next('ul:first').hide();
                $btn.bind('click', method.clickSubMenuHeader);
            };
        });

    };
    if ($('.js-p-menu').length) { initPageMenu();}

    //
    // Мобильное меню
    //---------------------------------------------------------------------------------------
    (function () {
        var $menu = $('.js-mm'),
            $toggle_btn = $('.js-mm-toggle'),
            $menu_btn = $menu.find('li').has('ul').addClass('has-menu').children('a'),
            $submenu = $menu.find('.has-menu').children('ul'),
            method = {};


        $toggle_btn.on('click', function () {
            if ($(this).hasClass('active')) {
                method.close();
            } else {
                method.show();
            }
        });

        $menu.on('click', '.m-menu__label', function () {
            method.close();
        });

        $menu.on('click', '.has-menu > a', function (e) {
            e.preventDefault();
            if ($(this).hasClass('active')) {
                method.closeSubMenu();
            } else {
                method.closeSubMenu();
                method.showSubMenu($(this));
            }
        });

        method.show = function () {
            $html.css('overflow', 'hidden');
            $overlay.show().bind('click', method.close);
            $toggle_btn.addClass('active');
            $menu.addClass('active');
        };

        method.close = function () {
            $overlay.hide().unbind('click', method.close);
            method.closeSubMenu();
            $toggle_btn.removeClass('active');
            $menu.removeClass('active');
            $html.css('overflow', 'auto');
        };

        method.showSubMenu = function (el) {
            method.closeSubMenu();
            el.addClass('active').parent('li').children('ul').slideDown();
        };

        method.closeSubMenu = function () {
            $submenu.slideUp();
            $menu_btn.removeClass('active');
        };

    })();

    //
    // Стилизуем хидер при скролле
    //---------------------------------------------------------------------------------------
    (function () {
        var $header = $('.b-header'),
            isStick = false, //флаг
            checkScroll;

        (checkScroll = function () {
            var fromTop = $window.scrollTop();
            if (fromTop > 0 && !isStick) {
                $header.addClass('scrolled');
                isStick = true;
            };
            if (fromTop === 0 && isStick) {
                $header.removeClass('scrolled');
                isStick = false;
            }
        })();

        $window.bind('scroll', checkScroll);
    })();

    //
    // Форма поиска
    //---------------------------------------------------------------------------------------
    (function () {
        var $search__btn = $('[data-searchform]'),
            $form = $('.b-search'),
            method = {};

        method.show = function () {
            $form.fadeIn(400);
        };

        method.hide = function () {
            $form.hide();
        };

        $('.b-header').on('click', '[data-searchform]', method.show);
        $form.on('click', '.b-search__close', method.hide);
    })();

    //
    // Маска для телефонного номера
    //---------------------------------------------------------------------------------------
    $('.js-phone-input').mask('+7 (999) 999 - 99 - 99');

    //
    // Стилизация Select
    //---------------------------------------------------------------------------------------
    function stylingSelect() {
        var $select = $('.js-select');
        $select.each(function () {
            $(this).selectric({
                disableOnMobile: false,
                responsive: true
            });
        });
    }
    if ($('.js-select').length) { stylingSelect(); }

    //
    // Модальное окно
    //---------------------------------------------------------------------------------------
    var showModal = (function (link) {
        var
        method = {},
        $modal,
        $close;

        $close = $('<button type="button" class="modal__close"><i class="icomoon-cross"></i></button>'); //иконка закрыть


        $close.on('click', function () {
            method.close();
        });

        // центрируем окно
        method.center = function () {
            var top, left;

            top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
            left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;

            $modal.css({
                top: top + $window.scrollTop(),
                left: left + $window.scrollLeft()
            });
        };


        // открываем
        method.open = function (link) {
            $modal = $(link);
            $modal.append($close);
            method.center();
            $window.bind('resize.modal', method.center).trigger('resize');
            $modal.fadeIn(400);
            $overlay.show().bind('click', method.close);
        };

        // закрываем
        method.close = function () {
            $modal.hide().find('iframe').attr('src', '');//если в модальном окне было видео - убъем
            $overlay.hide().unbind('click', method.close);
            $window.unbind('resize.modal');
        };

        // клик по кнопке с атрибутом data-modal - открываем модальное окно
        $body.on('click', '[data-modal]', function (e) {
            e.preventDefault();
            var link = $(this).data('modal');
            if (link) { showModal.open(link); }
        });

        return method;
    }());

    
    //
    // Слайдер
    //---------------------------------------------------------------------------------------
    function initSlider() {
        var slider = $('.js-slider');
        slider.bxSlider({
            mode: 'fade',
            pager: false,
            nextText: '<i class="icomoon-right"></i>',
            prevText: '<i class="icomoon-left"></i>',
            auto: true,
            pause: 8000,
            autoHover:true
        });
    }
    if ($('.js-slider').length) { initSlider();}
    

    //
    // Вкладки
    //---------------------------------------------------------------------------------------
    function initTabs() {
        var $list = $('.js-tabs'),
            $content = $('.js-tabs-content > div'),
            method = {};

        method.init = (function () {//спрячем "лишние" вкладки
            $content.hide()
            $list.each(function () {
                var current = $(this).find('li.current');
                if (current.length < 1) { $(this).find('li:first').addClass('current'); }
                current = $(this).find('li.current a').attr('href');
                $(current).show();
            });
        })();

        method.show = function (el) {//обработка клика по вкладке
            var $tabs = el.parents('ul').find('li');
            var tab_next = el.attr('href');
            var tab_current = $tabs.filter('.current').find('a').attr('href');
            $(tab_current).hide();
            $tabs.removeClass('current');
            el.parent().addClass('current');
            $(tab_next).fadeIn();
            history.pushState(null, null, window.location.search + el.attr('href'));
        };


        $list.on('click', 'a[href^="#"]', function (e) {//клик по вкладке
            e.preventDefault();
            method.show($(this));
        });

        method.parsing = (function () {//парсим линк и открываем нужную вкладку при загрузке
            var hash = window.location.hash;
            if (hash) {
                var selectedTab = $list.find('a[href="' + hash + '"]');
                selectedTab.trigger('click', true);
            };
        })();
    };
    if ($('.js-tabs').length) { initTabs(); }
    
    //
    // Галерея
    //---------------------------------------------------------------------------------------
    function initGallery() {
        $('.js-gallery').find('a[data-popup]').simpleLightbox({
            navText: ['<i class="icomoon-left"></i>', '<i class="icomoon-right"></i>'],
            captions: true,
            captionSelector: 'self',
            captionType: 'data',
            captionsData: 'caption',
            close: true,
            closeText: '<i class="icomoon-cross"></i>',
            showCounter: true,
            disableScroll:false
        });
    };
    if ($('.js-gallery').length) { initGallery(); }

    //
    // Видео в модальном окне
    //---------------------------------------------------------------------------------------
    $('a[data-video]').on('click', function (e) {
        e.preventDefault();
        var link = $(this).attr('href'),
            id = getYoutubeID(link);

        if (id) {
            $('#video').find('iframe').attr('src', 'https://www.youtube.com/embed/' + id + '?rel=0&amp;showinfo=0;autoplay=1');
            showModal.open('#video');
        }

        function getYoutubeID(url) {//парсим youtube-ссылку, возвращаем id видео
            var regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
            var match = url.match(regExp),
                urllink;
            if (match && match[1].length == 11) {
                urllink = match[1];
            } else {
                urllink = false;
            }
            return urllink;
        }
    });
    

    //
    // Скролл для фильтров каталога
    //---------------------------------------------------------------------------------------
    function initFilterScrollBar() {
        var $scroll = $('.js-scroll'),
            winW,//будем хранить ширину окна
            rtime, //переменные для пересчета ресайза окна с задержкой delta
            timeout = false,
            delta = 250,
            BREAKPOINT = 768,
            isScrollActive = false, //флаг состояния
            method = {};

        method.initJSscroll = function () {
            $scroll.perfectScrollbar({
                wheelSpeed: 1,
                minScrollbarLength: 30
            });
            isScrollActive = true;
        };

        method.destroyJSscroll = function () {
            $scroll.perfectScrollbar('destroy');
            isScrollActive = false;
        };

        method.updateJSscroll = function () {
            $scroll.perfectScrollbar('update');
        };

        method.endResize = function () {
            if (new Date() - rtime < delta) {
                setTimeout(method.endResize, delta);
            } else {
                timeout = false;
                //ресайз окончен - пересчитываем
                winW = verge.viewportW();
                if (winW >= BREAKPOINT) {//если планшет и больше
                    if (!isScrollActive) {
                        method.initJSscroll();//если перешли с мелкого размера на десктоп - подключили плагин
                    } else {
                        method.updateJSscroll();
                    }
                } else {//если мелкий экран
                    if (isScrollActive) {//и плагин активен
                        method.destroyJSscroll();//выключаем его
                    }
                }
            }
        }
        method.startResize = function () {
            rtime = new Date();
            if (timeout === false) {
                timeout = true;
                setTimeout(method.endResize, delta);
            }
        };

        //проверка при первой загрузке страницы
        winW = verge.viewportW();
        if (winW >= BREAKPOINT) {
            method.initJSscroll();
        };

        $window.bind('resize', method.startResize);//отслежиаем ресайз
    }
    if ($('.js-scroll').length) {
        initFilterScrollBar();
    };


    //
    // Покажем / спрячем фильтры каталога
    //---------------------------------------------------------------------------------------
    function collapseFilter() {
        var $filter=$('.js-filter-target'),
            $btn=$('.js-filter-toggle'),
            $toggle = $('.js-p-menu-toggle'),
            BREAKPOINT = 992,
            rtime, //переменные для пересчета ресайза окна с задержкой delta
            timeout = false,
            delta = 200,
            method = {};

        method.showFilter = function () {
            $btn.removeClass('active');
            $filter.slideDown(200);
        };

        method.hideFilter = function () {
            $btn.addClass('active');
            $filter.slideUp(200);
        };

        method.checkResolution = function () {
            var winW = $.viewportW();//ширина экрана
            if (winW >= BREAKPOINT) {//на десктопе покажем фильтр, в любом случае
                $btn.removeClass('active');
                $filter.show();
            };
        };

        method.endResize = function () {
            if (new Date() - rtime < delta) {
                setTimeout(method.endResize, delta);
            } else {
                timeout = false;
                //ресайз окончен - проверяем
                method.checkResolution();
            }
        };

        method.startResize = function () {
            rtime = new Date();
            if (timeout === false) {
                timeout = true;
                setTimeout(method.endResize, delta);
            }
        };

        $btn.on('click', function () {//клик по кнопке - показать/скрыть
            if ($(this).hasClass('active')) {
                method.showFilter();
            } else {
                method.hideFilter();
            }
        });

        $window.bind('resize', method.startResize);//начинаем отслеживать ресайз на десктоп
    };
    if ($('.js-filter-target').length) {
        collapseFilter();
    };

    //
    // Подключим степперы для кол-ва товаров в корзине
    //---------------------------------------------------------------------------------------
    function initStepper() {
        $('.js-stepper').stepper({
            'incrementButton': '+',
            'decrementButton': '-',
            'limit': [1, 100],
            'allowWheel': false,
            'allowArrows': false
        }).on('change', function () {
            var val = $(this).val();
            val = Math.round(val);

            if (val > 100) {
                val = 100;
            };

            if (val == 0) {
                val = 1;
            };

            $(this).val(val);
        });
    };
    if ($('.js-stepper').length) {
        initStepper();
    };

    //
    // Калькулятор в корзине
    //---------------------------------------------------------------------------------------
    function initCartCalc() {
        var $cart = $('.js-cart'), //таблица корзины
            $cartcount = $('.b-cartlink__count'), //кол-во товаров в хидере
            $total = $cart.find('.js-total-price'), //итоговая сумма
            method = {};

        method.recalc = function () {//пересчитываем корзину
            var i = 0,
                total_count = 0,
                total_price = 0;
            $cart.find('tbody tr').each(function () {
                i++;
                $(this).find('.js-num').text(i);//номер позиции
                var price = +$(this).find('.js-price').text(),
                    count = +$(this).find('.js-stepper').val(),
                    item_price = count * price;
                total_count = total_count + count;
                total_price = total_price + item_price;
                $(this).find('.js-total').text(item_price);
            });

            $total.text(total_price);
            $cartcount.text(total_count);

            if (total_count === 0) {
                method.empty();//если нет товаров в корзине
            }
        };

        method.delete = function (el) {//удаляем строку
            var $row = el.parents('tr');
            $row.remove();
            method.recalc();
        };

        method.empty = function () {
            $('#checkout').hide();
            $('#empty_cart').removeClass('g-hidden');
            $cartcount.parent('a').removeClass('active');
        };

        method.recalc();//проверим на старте

        $cart.find('.js-stepper').bind('change', method.recalc);//отслеживаем изменение кол-ва товаров
        $cart.find('.stepper-btn-wrap a').bind('click', method.recalc);
        $cart.find('.js-delete').on('click', function () {//удаление строки
            method.delete($(this));
        });
    };
    if ($('.js-cart').length) {
        initCartCalc();
    }
});
