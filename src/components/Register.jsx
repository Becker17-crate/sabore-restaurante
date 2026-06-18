import { useState } from "react";

function Register() {

  const [user, setUser] = useState({
    nombre:"",
    correo:"",
    telefono:"",
    password:""
  });

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert("Registro exitoso");

    console.log(user);

  };

  return (

    <section id="registro" className="section">

      <h2>Registro de Clientes</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          onChange={handleChange}
        />

        <input
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          onChange={handleChange}
        />

        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          onChange={handleChange}
        />

        <button type="submit">
          Registrarme
        </button>

      </form>

    </section>
  );
}

export default Register;