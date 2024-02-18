// фильтры карточек товаров
//1. фильтры карточек товаров(простые кнопки)
let wrapperOtherFilters = document.getElementById('wrapper-filters');
let simplexBtns = wrapperOtherFilters.getElementsByClassName('btn-simplex');
//2. фильтры карточек товаров (кнопки с настройкой параметров)
let allFilterArrowIcons = document.querySelectorAll('.btn-composite__arrow'); //
let allFilterContentBlocks = document.querySelectorAll('.dropdown-filter-content'); //
let allCompositeBtns = document.querySelectorAll('.btn-composite'); //
let allFilterCloseIcons = document.querySelectorAll('.btn-composite__close'); //

//3. фильтрация по диапазону цены
const priceWrapperBtn = document.getElementById('price-btn');
let btnPriceRange = priceWrapperBtn.querySelector('.btn-composite__range-price');
let inputPriceMin = document.getElementById('input-fromprice'); // input min
let inputPriceMax = document.getElementById('input-toprice'); // input max
let fromPrice; // значение текста в кнопке
let toPrice; // значение текста в кнопке
let searchMin; // переменная  для фильтрации
let searchMax; // переменная  для фильтрации
let itemsPrice = document.querySelectorAll('.catalog-card'); // карточки товаров
const hiddenButtonPrice = document.getElementById('pricerange-btn'); // скрытая кнопка фильтра
let priceInputs = document.querySelectorAll('input[type=number].dropdown-filter-content-range__input'); // все инпуты цены
//4. радиокнопки
let selectedRadioElemValue; // выбранная радиокнопка
let btnProcessingRangeText; // техт внутри кнопки фильтра обработки диаметра
const processingWrapperBtn = document.getElementById('processing-btn');
let btnProcessingRange = processingWrapperBtn.querySelector('.btn-composite__range-processing');
let radiosElems = document.querySelectorAll('input[name="processing"]');
const hiddenButtonAboveProcessing = document.getElementById('aboveprocessing-btn');
const hiddenButtonToProcessing = document.getElementById('toprocessing-btn');

// фильтры карточек товаров(простые кнопки)
function clearsimplexBtns() {
    for (let i = 0; i < simplexBtns.length; i++) {
        simplexBtns[i].classList.remove('active');
    }
}

for (let i = 0; i < simplexBtns.length; i++) {
    simplexBtns[i].addEventListener('click', function() {
        // изменение фона при клике
        if (this.classList.contains('active')) {
            // убираем активный фон
            this.classList.remove('active');

        } else {
            // добавляем активный фон
            clearsimplexBtns();
            this.classList.add('active');
        }
    })
}



//
document.addEventListener('DOMContentLoaded', () => {


    window.addEventListener('click', e => { // определить объект нажатия при нажатие на сложную кнопку или в другом месте

        // фильтры карточек товаров (кнопки с настройкой параметров)
        if (e.target.closest('.btn-composite')) {

            let wrapperBtn = e.target.closest('.wrapper-btn-composite');
            let btn = wrapperBtn.querySelector('.btn-composite');
            let filterContent = wrapperBtn.querySelector('.dropdown-filter-content');
            let filterBtnArrow = wrapperBtn.querySelector('.btn-composite__arrow');

            if (btn.classList.contains('control-class') && !btn.classList.contains('mode-btn')) {
                btn.classList.remove('control-class');
                // удаление классов активности у текущего элемента
                filterContent.classList.remove('active');
                filterBtnArrow.classList.remove('active-rotate');
            } else if (!btn.classList.contains('control-class') && !btn.classList.contains('mode-btn')) {

                removeDropdownContentClasses();
                // добавление классов активности у текущего элемента
                btn.classList.add('control-class');
                filterContent.classList.add('active');
                filterBtnArrow.classList.add('active-rotate');
                //inputLimitation();
            } else {}

        } else if (e.target.closest('.dropdown-filter-content__btn')) {
            //console.log('клик по кнопке выпадающего блока!');


            let wrapperBtn = e.target.closest('.wrapper-btn-composite');
            let btn = wrapperBtn.querySelector('.btn-composite');
            let filterBtnArrow = wrapperBtn.querySelector('.btn-composite__arrow');

            let btnCompositeRange = wrapperBtn.querySelector('.btn-composite__range'); // диапозон внутри кнопки
            let filterIconClose = wrapperBtn.querySelector('.btn-composite__close');
            let filterContent = wrapperBtn.querySelector('.dropdown-filter-content');

            btn.classList.add('active-bg');
            btn.classList.add('mode-btn');

            if (filterContent.closest('.dropdown-price')) {
                //console.log('Создаем диапазон');
                createPriceRange(); // создать диапазон цены
                filterPriceRange();
                createCloseIcon();
                closeRange();
            } else if (filterContent.closest('.dropdown-range')) {
                //console.log('выполняем функцию для диаметра обработки');
                createProcessingRange(); // создать диапазон обработки

                if (btnProcessingRangeText == '') {
                    //если радиокнопка не выбрана
                    btn.classList.remove('active-bg'); // активный фон
                    btn.classList.remove('mode-btn'); //служебный класс
                } else {
                    //если радиокнопка выбрана
                    createCloseIcon(); // создать иконку сброса фильтра
                    closeRange(); // активация функции сброса фильтра

                    //selectedRadioElemValue; // выбранная радиокнопка
                    //console.log('значение выбранной радиокнопки - ' + selectedRadioElemValue);
                    filterProcessingRange();
                }

            } else {

            }

            removeDropdownContentClasses();






            // функция сброса диапозона цены при нажатие на перекрестие
            function closeRange() {
                // событие при клике на перекрестие
                filterIconClose.addEventListener('click', function() {

                    btnCompositeRange.innerText = ''; // убираем текст внутри кнопки
                    filterBtnArrow.classList.add('visibility'); // показываем стрелку
                    filterIconClose.classList.remove('visibility'); // скрываем перекрестие
                    btn.classList.remove('active-bg');

                    if (filterContent.closest('.dropdown-price')) {

                        removefilterPriceRange();
                        // обнуление инпутов цены
                        searchMin = inputPriceMin.getAttribute('placeholder');
                        searchMax = inputPriceMax.getAttribute('placeholder');
                        inputPriceMin.value = '';
                        inputPriceMax.value = '';

                    } else if (filterContent.closest('.dropdown-range')) {

                        // обнуление инпутов радиокнопок
                        btnProcessingRangeText = '';
                        let obj = document.querySelectorAll('input[name="processing"]');
                        for (i = 0; i < obj.length; i++) {
                            obj[i].checked = false;
                        }
                        //

                        resetFilterProcessingRange();
                    } else {

                    }


                    setTimeout(function() {
                        // задержка на срабатывание кнопки для корректной работы
                        btn.classList.remove('mode-btn');
                    }, 500);
                })
            }
            //
            // функция создания иконки "перекрестие"
            function createCloseIcon() {

                if (btnProcessingRangeText = '') {

                    //console.log('if (btnProcessingRangeText = "  ")');
                } else {

                    filterBtnArrow.classList.remove('visibility'); // скрываем стрелку
                    filterIconClose.classList.add('visibility'); // показываем перекрестие
                }

            }


        } else if (e.target.closest('.dropdown-filter-content')) {
            //console.log('клик по выпадающему блоку!');
        } else {
            // console.log('событие  == клик в другом месте страницы!');
            removeDropdownContentClasses();

        }
    });

});

// функция удаления  классов у выпадающих блоков
function removeDropdownContentClasses() {
    // удаление классов активности у всех элементов
    for (let i = 0; i < allFilterArrowIcons.length; i++) {
        allFilterArrowIcons[i].classList.remove('active-rotate');
    }
    for (let i = 0; i < allFilterContentBlocks.length; i++) {
        allFilterContentBlocks[i].classList.remove('active');
    }
    for (let i = 0; i < allCompositeBtns.length; i++) {
        // allCompositeBtns[i].classList.remove('active-bg');
        allCompositeBtns[i].classList.remove('control-class');
    }
}

// фильтрация по диапазону цены
if ((inputPriceMin.value !== undefined || inputPriceMin.value !== null) && inputPriceMin.value === "") {
    searchMin = inputPriceMin.getAttribute('placeholder');
} else {
    searchMin = Number(document.getElementById('input-fromprice').value);
}


if ((inputPriceMax.value !== undefined || inputPriceMax.value !== null) && inputPriceMax.value === "") {
    searchMax = inputPriceMax.getAttribute('placeholder');
} else {
    searchMax = Number(document.getElementById('input-toprice').value);
}

fromPrice = searchMin;
toPrice = searchMax;


// получение значения цены в инпуте "от"
document.querySelector('.input-from-value').addEventListener('change', function() {

    if (inputPriceMin.value == '0' || inputPriceMin.value == '00' || inputPriceMin.value == '000' || inputPriceMin.value == '0000' || inputPriceMin.value == '00000' || inputPriceMin.value == '000000' || inputPriceMin.value == '0000000') {
        inputPriceMin.value = '0'
        searchMin = 0;
        //fromPrice = '0';
        /* console.log('отработал мин 0000'); */
    } else {
        searchMin = Number(document.getElementById('input-fromprice').value);
        //fromPrice = document.getElementById('input-fromprice').value;
        /* console.log('отработал мин обычн'); */
    }
});


// получение значения цены в инпуте "до"
document.querySelector('.input-to-value').addEventListener('change', function() {

    if (Number(inputPriceMin.value) > Number(inputPriceMax.value)) {
        // toPrice = Number(inputPriceMin.value) + 1;
        searchMax = Number(inputPriceMin.value) + 1;

    } else {
        if (inputPriceMax.value == '0' || inputPriceMax.value == '00' || inputPriceMax.value == '000' || inputPriceMax.value == '0000' || inputPriceMax.value == '00000' || inputPriceMax.value == '000000' || inputPriceMax.value == '0000000') {
            inputPriceMax.value = 100000;
            searchMax = 100000;
            //toPrice = '1000';
            /* console.log('отработал мах 0000'); */

        } else {
            searchMax = Number(document.getElementById('input-toprice').value);
            //toPrice = document.getElementById('input-toprice').value;
            /* console.log('отработал мах обычный'); */
        }

    }
});


// функция добавления диапазона цены в фильтр
function createPriceRange() {

    if (Number(searchMin) > Number(searchMax)) {
        //fromPrice = Number(inputToValue) - 1;
        fromPrice = '0';
        searchMin = 0;
        toPrice = '1000000';
        searchMax = 1000000;

    } else {
        fromPrice = String(searchMin);
        toPrice = String(searchMax);
    }


    let priceRange = `: ${fromPrice} - ${toPrice}`;
    btnPriceRange.innerText = priceRange; // 


}


//  фильтрация товаров внутри диапазона цены
function filterPriceRange() {

    itemsPrice.forEach(item => {
        let priceStr = item.querySelector('span.card-price__number').textContent; // перебор элементов с ценой
        let price = priceStr.replaceAll(' ', '')
        price = Number(price);
        if (price < searchMin || price > searchMax) {

            item.classList.remove('price-range'); // если цена вне диапазона инпутов
        } else if (price >= searchMin && price <= searchMax) {
            item.classList.add('price-range'); // если цена соотвествует диапазону

        } else {

        }

    });
    hiddenButtonPrice.classList.add('active-filter');
    hiddenButtonPrice.click(); // событие на скрытой кнопке фильтра
    //console.log('hiddenButtonPrice.click()');

}

// сброс фильтра товаров внутри диапазона цены
function removefilterPriceRange() {

    if (hiddenButtonPrice.classList.contains('active-filter')) {
        hiddenButtonPrice.click();
        hiddenButtonPrice.classList.remove('active-filter');
    } else {

    }

}



// ограничение количества символов в инпутах диапазона цены
Array.from(priceInputs).forEach(input => {
    let min = +input.min;
    let max = +input.max;

    input.addEventListener('input', (e) => {
        let value = +input.value;
        if (value > max) { input.value = max } else if (value < min) { input.value = min }
    })

});

// создание диапазона обработки на основе радиокнопок
function createProcessingRange() {
    // создание диапазона обработки на основе радиокнопок
    let processingRange; // добавленный текст кнопки фильтра

    for (let i = 0; i < radiosElems.length; i++) {
        if (radiosElems[i].checked) {
            selectedRadioElemValue = radiosElems[i].value;
            break;
        } else {
            selectedRadioElemValue = '';
        }
    }

    if (selectedRadioElemValue == undefined) {
        //console.log('Фильтр диапазона обработки не выбран!');
    } else {

        if (selectedRadioElemValue == 1) {

            //processingRange = ': выше 50мм';
            processingRange = ': выше 30мм';
            btnProcessingRangeText = processingRange;
            //console.log('Выбран диапазона обработки: ' + selectedRadioElemValue);
        } else if (selectedRadioElemValue == 2) {
            // processingRange = ': до 50мм';
            processingRange = ': до 30мм';
            btnProcessingRangeText = processingRange;
            //console.log('Выбран диапазона обработки: ' + selectedRadioElemValue);
        } else {
            btnProcessingRangeText = '';
            //console.log('Не выбран диапазона обработки: btnProcessingRangeText = "  "');
        }

        btnProcessingRange.innerText = btnProcessingRangeText;

    }
}



// функция фильтрации по радиокнопкам
function filterProcessingRange() {
    if (selectedRadioElemValue == 1) {
        hiddenButtonAboveProcessing.classList.add('active-filter');
        hiddenButtonAboveProcessing.click();
    } else if (selectedRadioElemValue == 2) {
        hiddenButtonToProcessing.classList.add('active-filter');
        hiddenButtonToProcessing.click();
    } else {

    }
}
// функция сброса фильтрации по радиокнопкам
function resetFilterProcessingRange() {
    if (selectedRadioElemValue == 1 && hiddenButtonAboveProcessing.classList.contains('active-filter')) {
        hiddenButtonAboveProcessing.click();
        hiddenButtonAboveProcessing.classList.remove('active-filter');
    } else if (selectedRadioElemValue == 2 && hiddenButtonToProcessing.classList.contains('active-filter')) {
        hiddenButtonToProcessing.click();
        hiddenButtonToProcessing.classList.remove('active-filter');
    } else {

    }
}



//  запуск скрипта фильтрации
let mixer = mixitup('.filter-container');