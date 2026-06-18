const formulario =
    document.getElementById("formReserva");
formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    let datos = {
        nombre:
            document.getElementById("nombre").value,
        telefono:
            document.getElementById("telefono").value,
        correo:
            document.getElementById("correo").value,
        fecha:
            document.getElementById("fecha").value,
        hora:
            document.getElementById("hora").value,
        personas:
            document.getElementById("personas").value
    };

    fetch("php/registrarReserva.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)

    })

        .then(res => res.text())
        .then(resp => {
            alert(resp);
            cargarReservas();

        });

});

function cargarReservas() {
    fetch("php/listarReservas.php")
        .then(res => res.json())
        .then(data => {
            let tabla =
                document.getElementById("tablaReservas");
            tabla.innerHTML = "";
            data.forEach(r => {
                tabla.innerHTML += `

    <tr>
        <td>${r.nombre}</td>
        <td>${r.fecha}</td>
        <td>${r.hora}</td>
        <td>${r.cantidad_personas}</td>
    </tr>
    `;
            });
        });

}

cargarReservas();