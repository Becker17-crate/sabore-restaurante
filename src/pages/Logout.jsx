import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Logout() {

    const navigate = useNavigate();

    const cerrarSesion = () => {

        localStorage.removeItem(
            "sesionActiva"
        );

        alert(
            "Sesión cerrada correctamente"
        );

        navigate("/");
    };

    return (
        <>
            <Navbar />

            <div className="logout-container">

                <div className="logout-card">

                    <h2>
                        ¿Desea cerrar sesión?
                    </h2>

                    <button
                        onClick={cerrarSesion}
                    >
                        Cerrar Sesión
                    </button>

                </div>

            </div>

            <Footer />
        </>
    );
}

export default Logout;