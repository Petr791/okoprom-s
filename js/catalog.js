// фильтры категорий
const mobileFiltersButton = document.getElementById('filters');
const mobileFiltersBlock = document.getElementById('filters-block');
const filtersCasing = document.querySelector('.filters-casing');
let parentfilters = document.querySelector('.filters-wrapper');
let filtersBtns = document.querySelectorAll('.filters-btn');

// кнопка "Загрузить еще"
const btnMoreProducts = document.getElementById('btn-more');
let productsCards = Array.from(document.querySelectorAll('.catalog-card'));

// фильтры категорий 
for (i = 0; i < parentfilters.length; index++) {
    const elem = parentfilters[index];

    elem.addEventListener('click', (event) => {

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

    });

}

// фильтры категорий на мобильном экране
mobileFiltersButton.addEventListener('click', function() {
    mobileFiltersBlock.classList.toggle('active');
    filtersCasing.classList.toggle('active');
    body.classList.add('lock');

});

// кнопка "Загрузить еще" если есть
if (btnMoreProducts) {
    window.addEventListener('resize', function(event) {
        if (event.target.window.innerWidth > 1024) response1();
        if (event.target.window.innerWidth <= 1024 && event.target.window.innerWidth > 576) response2();
        if (event.target.window.innerWidth < 576) response3();
    });

    function openCatalog() {
        btnMoreProducts.addEventListener('click', () => {
            //productsCards.forEach(item => item.classList.remove('hidden'));
            productsCards.forEach((item) => {
                item.classList.remove('hidden');
                //item.classList.add('mix');
            });
            btnMoreProducts.classList.add('hidden');
        });
    };

    //location.reload();
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

    response1();
    response2();
    response3();

}