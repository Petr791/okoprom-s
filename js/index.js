/* menu */
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


//  добавление классов анимации для мобильного меню
//animate__fadeInLeft
function addMobileMenuClass() {
    popupContent.classList.add('animate__animated', 'animate__fadeInLeft');
}
// удаление классов анимации  для мобильного меню
function removeMobileMenuClass() {
    popupContent.classList.remove('animate__animated', 'animate__fadeInLeft');
}


// добавление класса при изменении ширины экрана
if (document.documentElement.clientWidth > 576) {
    /* if (menu.classList.contains('active')) {
    	 menu.classList.remove('active');
    } */
    //menu.style.display = 'none';

}
if (document.documentElement.clientWidth < 576) {

}

//**************************************** */

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