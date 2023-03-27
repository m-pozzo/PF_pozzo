<?php 

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$asunto = $_POST['text-area'];

$mensaje = "Este mensaje fue enviado por " . $nombre . " " . $apellido . ",\n\r";
$mensaje .= "Su email es: " . $email . ",\n\r";
$mensaje .= "Asunto: " . $asunto;

$destinatario = 'muyuraniana@gmail.com';
$asunto = 'Mensaje de muyuraniana.com';

mail($destinatario, $asunto, utf8_decode($mensaje);

header("mensaje-exito.html");
exit();

?>