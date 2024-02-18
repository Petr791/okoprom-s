let bayBtns = document.body.querySelectorAll('.catalog-card__buy');
let cart = {};

document.addEventListener('DOMContentLoaded', function() {

    checkCart(); // проверка наличия корзины в localStorage
    //showMiniCart(); // показать мини-корзину
    bayBtns.forEach(function(btn) {
        // Вешаем событие клик на кнопку купить
        btn.addEventListener('click', addToCart);
    })

}, false);


function addToCart(e) {
    // функция добавить товар в корзину

    //let articul = e.target.getAttribute('data-article');
    let articul = this.getAttribute('data-article');

    if (cart[articul] != undefined) {
        cart[articul]++;
    } else {
        cart[articul] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart)); // записать в localStorage
    //showMiniCart(); // показать мини-корзину
}

function checkCart() {
    // функция проверки наличия корзины в localStorage
    if (localStorage.getItem('cart') != null) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
    //console.log(cart);
}



/* показать содержимое корзины. Если нужно */
/* let miniCart = document.getElementById('mini-cart');

function showMiniCart() {
    
    let out = '';
    for (let item in cart) {
        out += item + ' ---- ' + cart[item] + '<br>';
    }
    miniCart.innerHTML = out;
} */