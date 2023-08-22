<?php

$formname = $_POST['formname'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];


/* if (mail("example@mail.ru", "Заявка с сайта", "Имя:" . $name . "Телефон:" . $phone . ". E-mail: " . $email, "From: example2site@mail.ru \r\n")) {
	echo "сообщение успешно отправлено";
} else {
	echo "при отправке сообщения возникли ошибки";
} */

$to = "your@mail.ru";
$from = "site@mail.ru";
$subject = "Письмо с сайта okoprom.com";
$charset = "utf-8";
$headerss = "Content-type: text/html; charset=$charset\r\n";
$headerss .= "MIME-Version: 1.0\r\n";
$headerss .= "Date: " . date('D, d M Y h:i:s O') . "\r\n";

$msg = "Заявка на консультацию"  . "\n";
$msg .= "Имя:  " . $name . "\n";
$msg .= "Телефон: " . $phone . "\n";
$msg .= "E-mail: " . $email . "\n";
$msg .= "Письмо с сайта: " . $from . "\n";


if (mail($to, $subject, $msg, $headerss)) {
	echo "сообщение успешно отправлено";
} else {
	echo "при отправке сообщения возникли ошибки";
}

/* if(isset($_POST['submit'])){
	http_redirect('site.url')
} */



/* echo 'Ваше имя: ' . $_POST['name'] . ', Ваш телефон: ' . $_POST['phone'], ' Ваше сообщение: ' . $_POST['email']; */


 
/* $name = htmlspecialchars($name);
$tel = htmlspecialchars($tel);

$name = urlencode($name);
$tel = urlencode($tel);

$name = trim($name);
$tel = trim($tel); */