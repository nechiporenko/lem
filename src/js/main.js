// Application Scripts:

// Десктоп меню (выпадайки)
// Мобильное меню
// Сообщения об отправке формы
// Кнопка скролла страницы
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
        $('.js-menu li').on({
            mouseenter: function () {
                $(this).find('ul:first').stop(true, true).fadeIn('fast');
                $(this).find('a:first').addClass('hover');
            },
            mouseleave: function () {
                $(this).find('ul').stop(true, true).fadeOut('slow');
                $(this).find('a:first').removeClass('hover');
            }
        });
    })();

    //
    // Мобильное меню
    //---------------------------------------------------------------------------------------
    (function () {

    })();



    //
    // Модальное окно
    //---------------------------------------------------------------------------------------
    var showModal = (function (link) {
        var
        method = {},
        $modal,
        $close;

        $close = $('<a class="modal__close" href="#"><i class="icon-cancel"></i></a>'); //иконка закрыть


        $close.on('click', function (e) {
            e.preventDefault();
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
            $window.bind('resize.modal', method.center);
            $modal.show();
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
            pause: 8000
        });
    }
    if ($('.js-slider').length) { initSlider();}
    
    
    
});
