"use strict";

var popupLinks = document.querySelectorAll('.popup-link');
var body = document.querySelector('body');
var lockPadding = document.querySelectorAll('.lock-padding'); // для объектов фиксированной ширины
var popupContent = document.getElementById('popup__content');
var unlock = true;
var timeout = 800;

if (popupLinks.length > 0) {
    var _loop = function _loop(index) {
        var popupLink = popupLinks[index];
        popupLink.addEventListener('click', function(e) {
            var popupName = popupLink.getAttribute('href').replace('#', '');
            var curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
            addPopupClass(); // animation

        });
    };

    for (var index = 0; index < popupLinks.length; index++) {
        _loop(index);
    }
}

// объект, который закрывает попап
var popupCloseIcon = document.querySelectorAll('.close-popup');

if (popupCloseIcon.length > 0) {
    var _loop2 = function _loop2(_index) {
        var el = popupCloseIcon[_index];
        el.addEventListener('click', function(e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();

            //popup-form
            document.getElementById('popup-form').reset();

        });
    };

    for (var _index = 0; _index < popupCloseIcon.length; _index++) {
        _loop2(_index);
    }
}

// открытие попап
function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        var popupActive = document.querySelector('.popup.open');

        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }

        curentPopup.classList.add('open');
        curentPopup.addEventListener('click', function(e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

// закрытие попап
function popupClose(popupActive) {
    var doUnlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (unlock) {
        popupActive.classList.remove('open');

        if (doUnlock) {
            bodyUnLock();
        }
    }

    removePopupClass(); // animation

}


// отмена скрола для body и др
function bodyLock() {
    var lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 0.7 + 'px';


    // объекты фиксированной ширины
    if (lockPadding.length > 0) {
        for (var _index2 = 0; _index2 < lockPadding.length; _index2++) {
            var el = lockPadding[_index2];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    // отступ полосы прокрутки и отмена скрола
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    // чтобы небыло повторных нажатий
    unlock = false;
    // время задержки
    setTimeout(function() {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function() {
        if (lockPadding.length > 0) {
            for (var _index3 = 0; _index3 < lockPadding.length; _index3++) {
                var el = lockPadding[_index3];
                el.style.paddingRight = '0px';
            }
        }

        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);
    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function(e) {
    if (e.which === 27) {
        var popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});






//Полифилы
//подгоняет параметры под старые браузеры

(function() {
    // проверяем поддержку
    if (!Element.prototype.closest) {
        // реализуем
        Element.prototype.closest = function(css) {
            var node = this;

            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }

            return null;
        };
    }
})();

(function() {
    // проверяем поддержку
    if (!Element.prototype.matches) {
        // определяем свойство
        Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
    }
})();

function addPopupClass() {
    //  добавление классов анимации popup
    //popupContent.classList.add('animate__animated', 'animate__zoomInUp', 'animate__delay-0s');
    popupContent.classList.add('animate__animated', 'animate__fadeInUp');
}




function removePopupClass() {
    // удаление классов анимации popup
    //popupContent.classList.remove('animate__animated', 'animate__zoomInUp', 'animate__delay-0s');
    popupContent.classList.remove('animate__animated', 'animate__fadeInUp');
}