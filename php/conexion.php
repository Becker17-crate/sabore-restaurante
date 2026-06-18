<?php
$conexion = new mysqli(
"localhost",
"root",
"",
"restaurante_reservas"

);

if($conexion->connect_error){
die("Error conexión");
}

?>