function Menu() {
  return (
    <section id="menu" className="section">

      <h2>Nuestro Menú</h2>

      <div className="menu-grid">

        <div className="card">
          <img src="/plato1.jpg" alt="Plato 1" />
          <h3>Lomo Fino</h3>
          <p>S/ 45.00</p>
        </div>

        <div className="card">
          <img src="/plato2.jpg" alt="Plato 2" />
          <h3>Pasta Italiana</h3>
          <p>S/ 38.00</p>
        </div>

        <div className="card">
          <img src="/plato3.jpg" alt="Plato 3" />
          <h3>Salmón Premium</h3>
          <p>S/ 55.00</p>
        </div>

      </div>

    </section>
  );
}

export default Menu;