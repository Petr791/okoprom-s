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