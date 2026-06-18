CREATE DATABASE sabore_db;

USE sabore_db;

CREATE TABLE reservations(

id INT AUTO_INCREMENT PRIMARY KEY,

nombre VARCHAR(100),

fecha DATE,

hora TIME,

personas INT,

telefono VARCHAR(20),

estado ENUM(
'Pendiente',
'Confirmada',
'Cancelada'
)

);