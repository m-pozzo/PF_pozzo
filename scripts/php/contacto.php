

<?php 
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header('Location: mensaje-exitoso.html');
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];
    $campoAsunto = $_POST['text-area'];

    $mensaje = "Este mensaje fue enviado por " . $nombre . " " . $apellido . ",\n\r";
    $mensaje .= "Su email es: " . $email . ",\n\r";
    $mensaje .= "Asunto: " . $campoAsunto;

    $destinatario = 'muyuraniana@gmail.com';
    $asunto = 'Mensaje de muyuraniana.com';

    mail($destinatario, $asunto, utf8_decode($mensaje));
    exit;
}
?>