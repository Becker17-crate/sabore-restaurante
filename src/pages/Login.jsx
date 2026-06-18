import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const ingresar = () => {

    const usuario = JSON.parse(
      localStorage.getItem("usuario")
    );

    if (!correo || !password) {
      alert("Complete todos los campos");
      return;
    }

    if (
      usuario &&
      usuario.correo === correo &&
      usuario.password === password
    ) {

      localStorage.setItem(
        "sesionActiva",
        JSON.stringify(usuario)
      );

      alert(`Bienvenido ${usuario.nombre}`);

      navigate("/");

    } else {

      alert("Correo o contraseña incorrectos");

    }

  };

  return (
    <div className="login-page">

      <div className="login-card">

        <h1>SABORÉ</h1>

        <h2>Iniciar Sesión</h2>

        <input
          type="email"
          placeholder="Correo electrónico"
          onChange={(e) => setCorreo(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={ingresar}>
          Ingresar
        </button>

        <button
          onClick={() => navigate("/register")}
        >
          Crear Cuenta
        </button>

      </div>

    </div>
  );
}

export default Login;