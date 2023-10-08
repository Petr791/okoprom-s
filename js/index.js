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




// фильтры 

const mobileFiltersButton = document.getElementById('filters');
const mobileFiltersBlock = document.getElementById('filters-block');
const filtersCasing = document.querySelector('.filters-casing');
let parentfilters = document.querySelector('.filters-wrapper');
let filtersBtns = document.querySelectorAll('.filters-btn');


for (i = 0; i < parentfilters.length; index++) {
    const elem = parentfilters[index];

    elem.addEventListener('click', (event) => {
        // Отлавливаем элемент в родители на который мы нажали
        let targetEl = event.target;

        // Проверяем тот ли это элемент который нам нужен
        if (targetEl.classList.contains('filters-btn')) {
            for (let i = 0; i < filtersBtns.length; i++) {
                // Убираем у других
                filtersBtns[i].classList.remove('active');
            }
            // Добавляем тому на который нажали
            targetEl.classList.add('active');
            //console.log(targetEl);
            body.classList.remove('lock');
            let filterLink = targetEl.getAttribute("data-page");
            document.location.href = filterLink;
            //console.log(filterLink);
        }

    });

}



/* parentfilters.addEventListener('click', (event) => {
    // Отлавливаем элемент в родители на который мы нажали
    let targetEl = event.target;

    // Проверяем тот ли это элемент который нам нужен
    if (targetEl.classList.contains('filters-btn')) {
        for (let i = 0; i < filtersBtns.length; i++) {
            // Убираем у других
            filtersBtns[i].classList.remove('active');
        }
        // Добавляем тому на который нажали
        targetEl.classList.add('active');
        body.classList.remove('lock');
        let filterLink = targetEl.getAttribute("data-page");
        document.location.href = filterLink;
    }

}); */

mobileFiltersButton.addEventListener('click', function() {
    mobileFiltersBlock.classList.toggle('active');
    filtersCasing.classList.toggle('active');
    body.classList.add('lock');

});



// кнопка "Загрузить еще"
const btnMoreProducts = document.getElementById('btn-more');
let productsCards = Array.from(document.querySelectorAll('.catalog-card'));

window.addEventListener('resize', function(event) {
    if (event.target.window.innerWidth > 1024) response1();
    if (event.target.window.innerWidth <= 1024 && event.target.window.innerWidth > 576) response2();
    if (event.target.window.innerWidth < 576) response3();
});


function openCatalog() {
    btnMoreProducts.addEventListener('click', () => {
        productsCards.forEach(item => item.classList.remove('hidden'));
        btnMoreProducts.classList.add('hidden');
    });
};

function response1() {
    if (window.innerWidth > 1024) {

        btnMoreProducts.classList.add('hidden');

        productsCards.forEach((item, index) => {
            item.classList.add('hidden');
            if (index <= 8) {
                item.classList.remove('hidden');
            } else if (index > 8) {
                btnMoreProducts.classList.remove('hidden');
            }
            openCatalog();
        })
    }
}

response1();


function response2() {
    if (window.innerWidth <= 1024 && window.innerWidth > 576) {

        btnMoreProducts.classList.add('hidden');

        productsCards.forEach((item, index) => {
            item.classList.add('hidden');
            if (index <= 7) {
                item.classList.remove('hidden');
            } else if (index > 7) {
                btnMoreProducts.classList.remove('hidden');
            }
            openCatalog();
        })
    }
}

response2();

function response3() {
    if (window.innerWidth < 576) {

        btnMoreProducts.classList.add('hidden');

        productsCards.forEach((item, index) => {
            item.classList.add('hidden');
            if (index <= 5) {
                item.classList.remove('hidden');
            } else if (index > 5) {
                btnMoreProducts.classList.remove('hidden');
            }
            openCatalog();
        })
    }
}

response3();