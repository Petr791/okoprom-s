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

const mobileFiltersButton = document.getElementById('filters-btn');
const mobileFiltersBlock = document.getElementById('filters-block');

console.log(mobileFiltersButton);
console.log(mobileFiltersBlock);
mobileFiltersButton.addEventListener('click', function() {
    console.log('hhhhh');
    mobileFiltersBlock.classList.toggle('active');


});