<?php
include("conexion.php");
$sql = "

SELECT
c.nombre,
r.fecha,
r.hora,
r.cantidad_personas
FROM reservas r
INNER JOIN clientes c
ON c.id_cliente=r.id_cliente
";

$resultado =
$conexion->query($sql);

$reservas=[];

while($fila=$resultado->fetch_assoc()){
$reservas[]=$fila;

}

echo json_encode($reservas);

$verificar = "
SELECT *
FROM reservas
WHERE fecha='$fecha'
AND hora='$hora'
AND id_mesa=1
";

$resultado =
$conexion->query($verificar);
if($resultado->num_rows>0){
echo "Horario ocupado";
exit();
}