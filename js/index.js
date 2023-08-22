/*  */
console.log('Готово!');
const menuHamb = document.getElementById('menu-hamb');
const menuHambLine = document.querySelector('.menu-hamb__line');
const menu = document.getElementById('mobile-menu');
const mainMenuButtons = document.getElementById('mainmenu-buttons');

menuHamb.addEventListener('click', function() {
    //menuHambLine.classList.toggle('pressed');
    //menu.classList.toggle('active');
    //mainMenuButtons.classList.toggle('hidden');


    menuHambLine.classList.toggle('pressed');
    menu.classList.toggle('active');
    mainMenuButtons.classList.toggle('hidden');
});


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

    function siteSearch() {

        $('.search-form__btn').click(function() {
            $('.main-menu-inner').addClass('search');
        });

        $('.search-form__close').click(function() {
            $('.main-menu-inner').removeClass('search');
        });
    }
    siteSearch();

    //

});


const formSearch = document.getElementById('search-form');

formSearch.addEventListener('submit', function() {
    formSearch.releasePointerCapture();
})