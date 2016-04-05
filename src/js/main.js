// Application Scripts:

// Десктоп меню (выпадайки)
// Мобильное меню
// Стилизуем хидер при скролле
// Форма поиска
// Маска для телефонного номера
// Модальное окно
// Слайдер

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
        $menu.has('ul').children('a').append('&nbsp;<i class="icomoon-dropdown"></i>').addClass('has-menu');
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
        $menu.on('click', '.has-menu', function (e) {//запретим клик по заголовку под-меню
            e.preventDefault();
        });
    })();

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
            $modal.hide();
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
    
    
    
});
