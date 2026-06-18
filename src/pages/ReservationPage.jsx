import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ReservationPage() {

    const usuario = JSON.parse(
        localStorage.getItem("sesionActiva")
    );

    const [form, setForm] = useState({
        nombre: usuario?.nombre || "",
        fecha: "",
        hora: "",
        personas: "",
        mesa: "",
        observaciones: ""
    });

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const reservas =
        JSON.parse(localStorage.getItem("reservas")) || [];

    const reservasDelDia = reservas.filter(
        reserva => reserva.fecha === form.fecha
    );

    const horasOcupadas = reservasDelDia.map(
        reserva => reserva.hora
    );

    const totalMesas = 20;

    const mesasDisponibles =
        totalMesas - reservasDelDia.length;

    const reservar = (e) => {

        e.preventDefault();

        if (
            !form.nombre ||
            !form.fecha ||
            !form.hora ||
            !form.personas ||
            !form.mesa
        ) {
            alert("Complete todos los campos obligatorios");
            return;
        }

        const nuevasReservas = [
            ...reservas,
            form
        ];

        localStorage.setItem(
            "reservas",
            JSON.stringify(nuevasReservas)
        );

        alert(
            `✅ Reserva Confirmada

Cliente: ${form.nombre}
Fecha: ${form.fecha}
Hora: ${form.hora}
Mesa: ${form.mesa}
Personas: ${form.personas}`
        );

        setForm({
            nombre: usuario?.nombre || "",
            fecha: "",
            hora: "",
            personas: "",
            mesa: "",
            observaciones: ""
        });

    };

    return (
        <>
            <Navbar />

            <section className="page-hero">

                <div className="page-overlay">

                    <div className="page-content">


                        <h1>Reservaciones</h1>

                        <p>
                            Reserva tu mesa en pocos segundos.
                        </p>

                    </div>

                </div>

            </section>

            <div className="reservation-container">

                <div className="reservation-card">

                    <h2>Formulario de Reserva</h2>

                    <div className="reservation-layout">

                        <div className="calendar-box">

                            <h3>Calendario</h3>

                            <input
                                type="date"
                                name="fecha"
                                value={form.fecha}
                                onChange={handleChange}
                            />

                            <div className="status-box">

                                <p>🟢 Disponible</p>

                                <p>🔴 Ocupado</p>

                            </div>

                            <h3>Reservas Registradas</h3>

                            <p>
                                Reservas para esta fecha:
                                {" "}
                                {reservasDelDia.length}
                            </p>

                            <p>
                                Mesas disponibles:
                                {" "}
                                {mesasDisponibles}
                            </p>
                        </div>

                        <form onSubmit={reservar}>

                            <input
                                type="text"
                                name="nombre"
                                value={form.nombre}
                                readOnly
                            />

                            <select
                                name="hora"
                                value={form.hora}
                                onChange={handleChange}
                            >

                                <option value="">
                                    Seleccione una Hora
                                </option>

                                {[
                                    "12:00",
                                    "13:00",
                                    "14:00",
                                    "15:00",
                                    "16:00",
                                    "17:00",
                                    "18:00",
                                    "19:00",
                                    "20:00"
                                ].map((hora) => (

                                    <option
                                        key={hora}
                                        value={hora}
                                        disabled={
                                            horasOcupadas.includes(hora)
                                        }
                                    >

                                        {horasOcupadas.includes(hora)
                                            ? `🔴 ${hora} Ocupado`
                                            : `🟢 ${hora}`}

                                    </option>

                                ))}

                            </select>

                            <select
                                name="personas"
                                value={form.personas}
                                onChange={handleChange}
                            >

                                <option value="">
                                    Número de Personas
                                </option>

                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>

                            </select>

                            <select
                                name="mesa"
                                value={form.mesa}
                                onChange={handleChange}
                            >

                                <option value="">
                                    Seleccione una Mesa
                                </option>

                                <option>Mesa VIP</option>
                                <option>Mesa Terraza</option>
                                <option>Mesa Familiar</option>
                                <option>Mesa Ventana</option>

                            </select>

                            <textarea
                                name="observaciones"
                                value={form.observaciones}
                                placeholder="Observaciones especiales"
                                rows="4"
                                onChange={handleChange}
                            />

                            <button type="submit">
                                Confirmar Reserva
                            </button>

                        </form>

                    </div>

                </div>

            </div>

            <Footer />
        </>
    );
}

export default ReservationPage;