import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function EditReservation() {

    const { id } = useParams();

    const navigate = useNavigate();

    const reservas =
        JSON.parse(localStorage.getItem("reservas")) || [];

    const reserva = reservas[id];

    const [form, setForm] = useState(reserva);

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const guardarCambios = (e) => {

        e.preventDefault();

        reservas[id] = form;

        localStorage.setItem(
            "reservas",
            JSON.stringify(reservas)
        );

        alert(
            "Reserva actualizada correctamente"
        );

        navigate("/misreservas");

    };

    return (
        <>
            <Navbar />

            <div className="reservation-container">

                <div className="reservation-card">

                    <h2>
                        Editar Reserva
                    </h2>

                    <form onSubmit={guardarCambios}>

                        <input
                            type="text"
                            value={form.nombre}
                            readOnly
                        />

                        <input
                            type="date"
                            name="fecha"
                            value={form.fecha}
                            onChange={handleChange}
                        />

                        <input
                            type="time"
                            name="hora"
                            value={form.hora}
                            onChange={handleChange}
                        />

                        <select
                            name="personas"
                            value={form.personas}
                            onChange={handleChange}
                        >
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
                            <option>Mesa VIP</option>
                            <option>Mesa Terraza</option>
                            <option>Mesa Familiar</option>
                            <option>Mesa Ventana</option>
                        </select>

                        <textarea
                            name="observaciones"
                            value={form.observaciones}
                            onChange={handleChange}
                        />

                        <button type="submit">
                            Guardar Cambios
                        </button>

                    </form>

                </div>

            </div>

            <Footer />
        </>
    );
}

export default EditReservation;