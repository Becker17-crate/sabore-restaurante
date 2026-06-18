import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MyReservations() {

    const navigate = useNavigate();

    const [reservas, setReservas] = useState(
        JSON.parse(localStorage.getItem("reservas")) || []
    );

    const eliminarReserva = (index) => {

        const confirmar = window.confirm(
            "¿Desea cancelar esta reserva?"
        );

        if (!confirmar) return;

        const nuevasReservas =
            reservas.filter(
                (_, i) => i !== index
            );

        localStorage.setItem(
            "reservas",
            JSON.stringify(nuevasReservas)
        );

        setReservas(nuevasReservas);

        alert("Reserva cancelada correctamente");

    };

    return (
        <>
            <Navbar />

            <section className="page-hero">

                <div className="page-overlay">

                    <div className="page-content">

                        <span>SABORÉ RESTAURANTE</span>

                        <h1>Mis Reservaciones</h1>

                    </div>

                </div>

            </section>

            <div className="reservation-history">

                {reservas.length === 0 ? (

                    <h2
                        style={{
                            textAlign: "center",
                            marginTop: "50px"
                        }}
                    >
                        No tiene reservaciones registradas.
                    </h2>

                ) : (

                    <table>

                        <thead>

                            <tr>

                                <th>Fecha</th>
                                <th>Hora</th>
                                <th>Mesa</th>
                                <th>Personas</th>
                                <th>Acciones</th>

                            </tr>

                        </thead>

                        <tbody>

                            {reservas.map((reserva, index) => (

                                <tr key={index}>

                                    <td>{reserva.fecha}</td>

                                    <td>{reserva.hora}</td>

                                    <td>{reserva.mesa}</td>

                                    <td>{reserva.personas}</td>

                                    <td>

                                        <button
                                            className="edit-btn"
                                            onClick={() =>
                                                navigate(
                                                    `/editar-reserva/${index}`
                                                )
                                            }
                                        >
                                            Editar
                                        </button>

                                        <button
                                            className="delete-btn"
                                            onClick={() =>
                                                eliminarReserva(index)
                                            }
                                        >
                                            Cancelar
                                        </button>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                )}

            </div>

            <Footer />
        </>
    );
}

export default MyReservations;