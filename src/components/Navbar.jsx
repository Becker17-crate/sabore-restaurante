import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const usuario = JSON.parse(
    localStorage.getItem("sesionActiva")
  );

  return (

    <header className="navbar">

      <div className="logo">
        <img
          src="/logo-restaurante.png"
          alt="SABORÉ RESTAURANTE"
        />
      </div>

      <nav>
        <ul className="nav-menu">

          <li>
            <Link className="nav-link" to="/">
              Inicio
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/nosotros">
              Nosotros
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/menu">
              Menú
            </Link>
          </li>

        </ul>
      </nav>

      {!usuario ? (

        <Link
          to="/login"
          className="login-box"
        >

          <div className="login-icon">
            <FaUserCircle />
          </div>

          <div className="login-text">
            <span>Hola,</span>
            <strong>INICIAR SESIÓN</strong>
          </div>

        </Link>

      ) : (

        <div
          className="user-menu"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >

          <div className="login-box">

            <div className="login-icon">
              <FaUserCircle />
            </div>

            <div className="login-text">

              <span>Hola,</span>

              <strong>
                {usuario.nombre}
              </strong>

            </div>

          </div>

          {menuOpen && (

            <div className="dropdown-menu">

              <Link
                to="/micuenta"
                className="dropdown-item"
              >
                👤 Mi Cuenta
              </Link>

              <Link
                to="/misreservas"
                className="dropdown-item"
              >
                📅 Mis Reservaciones
              </Link>

              <Link
                to="/logout"
                className="dropdown-item"
              >
                🚪 Cerrar Sesión
              </Link>

              <Link
                to="/eliminar-cuenta"
                className="dropdown-item danger-item"
              >
                🗑️ Eliminar Cuenta
              </Link>

            </div>

          )}

        </div>

      )}

    </header>

  );
}

export default Navbar;