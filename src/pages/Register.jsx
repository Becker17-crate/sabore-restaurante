import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({

    nombre: "",
    correo: "",
    password: ""

  });

  const handleChange = (e) => {

    setForm({

      ...form,
      [e.target.name]: e.target.value

    });

  };

  const registrar = () => {

    if (
      !form.nombre ||
      !form.correo ||
      !form.password
    ) {

      alert("Faltan datos por completar");
      return;

    }

    localStorage.setItem(
      "usuario",
      JSON.stringify(form)
    );

    alert("Cuenta creada correctamente");

    navigate("/login");

  };

  return (

    <div className="login-page">

      <div className="login-card">

        <h1>SABORÉ</h1>

        <h2>Crear Cuenta</h2>

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
          type="password"
          name="password"
          placeholder="Contraseña"
          onChange={handleChange}
        />

        <button onClick={registrar}>
          Registrarme
        </button>

      </div>

    </div>
  );
}

export default Register;