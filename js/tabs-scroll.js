$(document).ready(function() {

    $('a.scrollto').click(function() {
        // подчеркивание активного таба
        let tab = $(this).parent('.tab-header');
        $('.tab-header').removeClass('active');
        tab.addClass('active');
        // анимация скрола после нажатия таба

        let elementClick = $(this).attr('href');
        let destination = $(elementClick).offset().top - 100;
        $('html:not(:animated),body:not(:animated)').animate({ scrollTop: destination }, 1100);
        return false;
    });

});