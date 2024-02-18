let cart = {}; // корзина

$(document).ready(function() {
    console.log('Готово!');

    $.getJSON('./js/goods-data.json', function(data) {
        let goods = data; // все товары в массиве

        checkCart(); // работает
        showCart(); // вывод товаров на страницу

        function showCart() {

            let out = '';
            if ($.isEmptyObject(cart)) {
                // корзина пуста
                out = '<div class="cart-title-wrapper"><h1 class="section-title cart-title">Ваша корзина пуста! Добавьте товар.</h1></div>';
                $('#my-cart').html(out);

            } else {
                //console.log(goods);
                out = '';

                for (let key in cart) {
                    //out += key + '---' + cart[key] + '<br>';

                    out += '<div class="cart-elem-row">';
                    out += '<div class="cart-btn-wrapper"><button class="delete btn-primary cart-elem__btn" data-article="' + key + '">X</button></div>';
                    //out+= '<img src="'+goods[key]['image']+'" class="cart-image">';
                    out += '<div class="cart-img-wrapper"><img src="' + goods[key].image + '" class="cart-elem__img" alt="image machine"></div>';
                    /*   out += '<div class="cart-img-wrapper"><img src="' + goods[key]['image'] + '" class="cart-elem__img" alt="image machine"></div>'; */
                    out += '<div class="cart-elem__name"> <a  class="cart-elem__link" href="' + '#' + '">' + goods[key].name + '</a></div>';
                    out += '<div class="cart-btn-wrapper"><button class="minus btn-primary cart-elem__btn" data-article="' + key + '">-</button></div>';
                    out += '<div class="cart-elem__quantity">' + cart[key] + '</div>';
                    out += '<div class="cart-btn-wrapper"><button class="plus btn-primary cart-elem__btn" data-article="' + key + '">+</button></div>';
                    out += '<div class="cart-elem-wrapper">' + ' = <span  class="cart-elem__sum">' + cart[key] * goods[key].cost + '</span></div>';
                    out += '</div>';
                    out += '<br>';

                }

                out += '<div class="cart-total-wrapper">Итого: <span  class="cart-total-sum"></span><span> ₽</span></div>';
                out += '<div class="cart-order-wrapper"><button class="cart-order__btn btn-primary">Оформить заказ</button></div>'


            }
            $('#my-cart').html(out);
            $('.plus').on('click', plusGoods);
            $('.minus').on('click', minusGoods);
            $('.delete').on('click', deleteGoods);



            const initTotalSum = () => {
                let totalSumElem = document.querySelector('.cart-total-sum');
                let totalSum = 0;

                [...document.querySelectorAll('.cart-elem__sum')].forEach((item) => {
                    console.log(item);
                    totalSum += Number(item.textContent);
                });

                totalSumElem.textContent = totalSum;
            };

            if (document.querySelector('.cart-total-sum')) {
                initTotalSum();
            }

        }

        function plusGoods() {
            let articul = $(this).attr('data-article');
            cart[articul]++;
            saveCartToLS(); // сохранение корзины в localStorage
            showCart();
        }

        function minusGoods() {
            let articul = $(this).attr('data-article');

            if (cart[articul] > 1) {
                cart[articul]--;
            } else {
                delete cart[articul];
            }
            saveCartToLS(); // сохранение корзины в localStorage
            showCart();
        }

        function deleteGoods() {
            let articul = $(this).attr('data-article');
            delete cart[articul];
            saveCartToLS(); // сохранение корзины в localStorage
            showCart();
        }

    });

});

function checkCart() {
    // проверка наличия корзины в localStorage
    if (localStorage.getItem('cart') != null) {
        cart = JSON.parse(localStorage.getItem('cart'));
        //console.log(cart);
    }
}

function saveCartToLS() {
    localStorage.setItem('cart', JSON.stringify(cart));

}