import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MenuPage() {
  return (
    <>
      <Navbar />

      <section className="page-hero">

        <div className="page-overlay">

          <div className="page-content">

            <h1>Nuestro Menú</h1>

            <p>
              Descubre nuestros platos exclusivos.
            </p>

          </div>

        </div>

      </section>

      <div className="page-container">

        <div className="menu-grid">

          <div className="card">
            <img src="/plato1.jpg" alt="Lomo Fino" />
            <h3>Lomo Fino Premium</h3>
            <p>S/ 45.00</p>
          </div>

          <div className="card">
            <img src="/plato2.jpg" alt="Pasta" />
            <h3>Pasta Italiana</h3>
            <p>S/ 38.00</p>
          </div>

          <div className="card">
            <img src="/plato3.jpg" alt="Salmón" />
            <h3>Salmón Premium</h3>
            <p>S/ 55.00</p>
          </div>

          <div className="card">
            <img src="/plato4.jpg" alt="Camarones y Langosta " />
            <h3>Camarones y Langosta Premium</h3>
            <p>S/66.00</p>
          </div>

          <div className="card">
            <img src="/plato5.jpg" alt="Cordon Bleu Rolls " />
            <h3>Cordon Bleu Rolls</h3>
            <p>S/70.00</p>
          </div>

          <div className="card">
            <img src="/plato6.jpg" alt="Gourmet Taco" />
            <h3>Gourmet Taco with Edible Flowers</h3>
            <p>S/100</p>
          </div>

          <div className="card">
            <img src="/plato7.jpg" alt="tentáculos de pulpo " />
            <h3>Tentáculos de Pulpo  Premium</h3>
            <p>S/150</p>
          </div>

          <div className="card">
            <img src="/plato8.jpg" alt="Langostinos" />
            <h3>Langostinos tigre Premium</h3>
            <p>S/200</p>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default MenuPage;;