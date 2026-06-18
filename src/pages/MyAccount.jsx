import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyAccount() {

    const usuario = JSON.parse(
        localStorage.getItem("sesionActiva")
    );
    
    return (
        <>
            <Navbar />

            <section className="page-hero">

                <div className="page-overlay">

                    <div className="page-content">

                        <span>SABORÉ RESTAURANTE</span>

                        <h1>Mi Cuenta</h1>

                    </div>

                </div>

            </section>

            <div className="account-container">

                <div className="account-card">

                    <h2>Información Personal</h2>

                    <p>
                        <strong>Nombre:</strong>
                        {" "}
                        {usuario?.nombre}
                    </p>

                    <p>
                        <strong>Correo:</strong>
                        {" "}
                        {usuario?.correo}
                    </p>

                    <p>
                        <strong>Estado:</strong>
                        {" "}
                        🟢 Cuenta Activa
                    </p>

                </div>

            </div>

            <Footer />
        </>
    );
}

export default MyAccount;