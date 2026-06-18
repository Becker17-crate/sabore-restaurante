import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function DeleteAccount() {

    const navigate = useNavigate();

    const eliminarCuenta = () => {

        const confirmar = window.confirm(
            "¿Está seguro de eliminar su cuenta? Esta acción no se puede deshacer."
        );

        if (!confirmar) return;

        localStorage.removeItem("sesionActiva");
        localStorage.removeItem("usuario");
        localStorage.removeItem("reservas");

        alert(
            "Cuenta eliminada correctamente."
        );

        navigate("/");
    };

    return (
        <>
            <Navbar />

            <div className="logout-container">

                <div className="logout-card">

                    <h2>
                        ¿Desea eliminar su cuenta?
                    </h2>

                    <p
                        style={{
                            marginBottom: "20px"
                        }}
                    >
                        Esta acción eliminará su cuenta y todas sus reservaciones.
                    </p>

                    <button
                        className="delete-account-btn"
                        onClick={eliminarCuenta}
                    >
                        Eliminar Cuenta
                    </button>

                </div>

            </div>

            <Footer />
        </>
    );
}

export default DeleteAccount;