<?php
include("conexion.php");
$data =
json_decode(file_get_contents("php://input"));
$nombre = $data->nombre;
$telefono = $data->telefono;
$correo = $data->correo;
$fecha = $data->fecha;
$hora = $data->hora;
$personas = $data->personas;
$sqlCliente = "

INSERT INTO clientes
(nombre,telefono,correo)
VALUES
('$nombre','$telefono','$correo')
";

$conexion->query($sqlCliente);
$idCliente =
$conexion->insert_id;
$sqlReserva = "

INSERT INTO reservas
(id_cliente,id_mesa,fecha,hora,
cantidad_personas,estado)
VALUES
($idCliente,1,
'$fecha',
'$hora',
$personas,
'Confirmada')
";

if($conexion->query($sqlReserva)){
echo "Reserva registrada";
}else{
echo "Error";
}