

jQuery(document).ready(function ($) {
    
    //
    // Калькулятор в корзине
    //---------------------------------------------------------------------------------------
    function initCartCalc() {
        var $cart = $('.js-cart'), //таблица корзины
            $cartcount = $('.b-cartlink__count'), //кол-во товаров в хидере
            $total = $cart.find('.js-total-price'), //итоговая сумма
            $delivery = $cart.find('.wrapper-class-name'), //обертка вокруг радиокнопок 
            $delivery_price = $cart.find('.your-class-name'),
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
            $delivery_price.text(calcDelivery());
            

            if (total_count === 0) {
                method.empty();//если нет товаров в корзине
                $delivery_price.text('0');
            };
            
            function calcDelivery(){
				var dtype = $delivery.find('input[type="radio"]:checked').val(),
					deliverySum;
				if (dtype == 'type_percent'){ //процент от суммы
					if(total_price > 0 && total_price <= 1000){
						deliverySum = Math.floor(total_price*0.1);
					};
					if(total_price > 1000 && total_price <= 2000){
						deliverySum = Math.floor(total_price*0.15);
					};
				} else {//постоянное значение
					deliverySum = 100;
				}
				
				return deliverySum;
			};
			
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
        $delivery_price.find('input[type="radio"]').bind('change', method.recalc);
    };
    if ($('.js-cart').length) {
        initCartCalc();
    }
});
