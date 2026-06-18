import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <Navbar />

            <section className="page-hero">

                <div className="page-overlay">

                    <div className="page-content">

                        <h1>Nosotros</h1>

                        <p>
                            Conoce nuestra historia y pasión por la gastronomía.
                        </p>

                    </div>

                </div>

            </section>

            {/* HISTORIA */}

            <section className="about-section">

                <div className="about-content">

                    <div className="about-text">

                        <h2>Nuestra Historia</h2>

                        <p>
                            SABORÉ RESTAURANTE nació con la misión de brindar
                            una experiencia gastronómica única, combinando
                            tradición, innovación y los mejores ingredientes
                            seleccionados cuidadosamente.
                        </p>

                        <p>
                            Nuestro compromiso es ofrecer platos de alta calidad
                            en un ambiente elegante, cálido y acogedor para
                            nuestros clientes.
                        </p>

                        <p>
                            Cada detalle de nuestro restaurante ha sido pensado
                            para convertir cada visita en una experiencia
                            inolvidable.
                        </p>

                    </div>

                    <div className="about-image-box">

                        {/* CAMBIA LA IMAGEN CUANDO QUIERAS */}

                        <img
                            src="/logo-restaurante.png"
                            alt="SABORÉ Restaurante"
                        />

                    </div>

                </div>

            </section>

            {/* ESTADÍSTICAS */}

            <section className="stats-section">

                <div className="stat-card">
                    <h3>10+</h3>
                    <p>Años de Experiencia</p>
                </div>

                <div className="stat-card">
                    <h3>15,000+</h3>
                    <p>Clientes Satisfechos</p>
                </div>

                <div className="stat-card">
                    <h3>50+</h3>
                    <p>Platos Exclusivos</p>
                </div>

                <div className="stat-card">
                    <h3>5 ★</h3>
                    <p>Calificación Promedio</p>
                </div>

            </section>

            {/* FILOSOFÍA */}

            <section className="values-section">

                <h2>Nuestra Filosofía</h2>

                <div className="values-grid">

                    <div className="value-card">

                        <h3>🍽 Calidad Premium</h3>

                        <p>
                            Utilizamos ingredientes frescos y seleccionados para
                            garantizar el mejor sabor en cada plato.
                        </p>

                    </div>

                    <div className="value-card">

                        <h3>👨‍🍳 Chefs Expertos</h3>

                        <p>
                            Nuestro equipo está formado por profesionales
                            apasionados por la gastronomía.
                        </p>

                    </div>

                    <div className="value-card">

                        <h3>❤️ Atención Personalizada</h3>

                        <p>
                            Nos esforzamos por brindar una experiencia cercana y
                            memorable para cada cliente.
                        </p>

                    </div>

                </div>

            </section>

            {/* GALERÍA */}

            <section className="gallery-section">

                <h2>Nuestro Restaurante</h2>

                <div className="gallery-grid">

                    <img src="/res1.png" alt="" />
                    <img src="/coci1.png" alt="" />
                    <img src="/personal1.png" alt="" />
                    <img src="/reser1.png" alt="" />

                </div>

            </section>

            {/* CTA */}

            <section className="about-cta">

                <h2>
                    ¿Listo para vivir una experiencia gastronómica única?
                </h2>

                <p>
                    Reserva tu mesa y disfruta de nuestros mejores platos.
                </p>

                <Link
                    to="/reservas"
                    className="hero-btn"
                >
                    Reservar Mesa
                </Link>

            </section>

            <Footer />
        </>
    );
}

export default About;