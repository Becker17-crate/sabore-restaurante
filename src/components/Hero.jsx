import { Link } from "react-router-dom";

function Hero() {
  return (
    <section id="inicio" className="hero">

      <div className="overlay">

        <div className="hero-content">

          <span>BIENVENIDO A SABORÉ</span>

          <h1>Reserva tu Mesa</h1>

          <p>
            Vive una experiencia gastronómica única.
          </p>

          <Link
            to="/reservas"
            className="hero-btn"
          >
            Reservación
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Hero;