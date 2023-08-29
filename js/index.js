/*  */
console.log('Готово!');
const menuHamb = document.getElementById('menu-hamb');
const menuHambLine = document.querySelector('.menu-hamb__line');
const menu = document.getElementById('mobile-menu');
const mainMenuButtons = document.getElementById('mainmenu-buttons');

menuHamb.addEventListener('click', function() {
    menuHambLine.classList.toggle('pressed');
    //menu.classList.toggle('active');
    mainMenuButtons.classList.toggle('hidden');
    menu.classList.toggle('animate__animated');
    menu.classList.toggle('animate__fadeInLeft');
});

//animate__fadeInLeft
//  добавление классов анимации для мобильного меню
function addMobileMenuClass() {
    popupContent.classList.add('animate__animated', 'animate__fadeInLeft');
}
// удаление классов анимации  для мобильного меню
function removeMobileMenuClass() {
    popupContent.classList.remove('animate__animated', 'animate__fadeInLeft');
}


//
if (document.documentElement.clientWidth > 576) {
    /* if (menu.classList.contains('active')) {
    	 menu.classList.remove('active');
    } */
    //menu.style.display = 'none';

}
if (document.documentElement.clientWidth < 576) {

}

$(document).ready(function() {

    // форма поиска
    function siteSearch() {

        $('.search-form__btn').click(function() {
            $('.main-menu-inner').addClass('search');
        });

        $('.search-form__close').click(function() {
            $('.main-menu-inner').removeClass('search');
        });
    }
    siteSearch();

});

const formSearch = document.getElementById('search-form');

formSearch.addEventListener('submit', function() {
    formSearch.releasePointerCapture();
})




//

$(document).ready(function() {

    // счетчики на странице "О компании"
    $(window).scroll(function() {
        scrollTracking();
    });

    let block_show = false;

    function scrollTracking() {
        if (block_show) {
            return false;
        }
        let windowScrollTop = $(window).scrollTop();
        let windowHeight = $(window).height();
        let elementOffset = $('.section-benefit').offset().top;
        let elementHeight = $('.section-benefit').outerHeight();
        let documentHeight = $(document).height();

        if (windowScrollTop + windowHeight >= elementOffset || windowHeight + windowScrollTop == documentHeight || elementHeight + elementOffset < windowHeight) {
            block_show = true;

            // анимация счетчиков на странице "О компании"
            $('.benefit-counter').each(function() {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 1500,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
    }
    scrollTracking();
});