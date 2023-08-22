$(document).ready(function() {
    $('form').submit(function() {


        // Получение ID формы
        let formID = $(this).attr('id');
        console.log('ID отправленной формы: ' + formID);

        let formNm;
        //Если это не форма поиска
        if (formID != $('#search-form').attr('id')) {
            // Добавление решётки к имени ID
            formNm = $('#' + formID);
        }
        $.ajax({
            type: "POST",
            url: './php/send-form.php',
            //dataType: 'html',
            data: formNm.serialize(),
            beforeSend: function() {
                // Вывод текста в процессе отправки
            },
            success: function(data) {
                console.log(data);
                // Вывод текста результата отправки
                window.location.href = './pages/form-answer.html';

            },
            error: function(jqXHR, text, error) {
                // Вывод текста ошибки отправки
                //$("#msg1").html(error);
                console.log('jqXHR: ' + jqXHR);
                console.log('Текст: ' + text);
                console.log('Ошибка: ' + error);
                window.location.href = './pages/form-error.html';
            }
        });

        this.reset();
        //window.location.href = './pages/save.html';
        return false;

    });
});