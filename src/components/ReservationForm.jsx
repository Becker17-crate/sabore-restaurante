import { useState } from "react";

function ReservationForm() {

  const [formData, setFormData] = useState({

    nombre:"",
    fecha:"",
    hora:"",
    personas:1,
    telefono:""

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]: e.target.value

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(formData);

  };

  return (

    <form onSubmit={handleSubmit}>

      <input
        name="nombre"
        placeholder="Nombre"
        onChange={handleChange}
      />

      <input
        type="date"
        name="fecha"
        onChange={handleChange}
      />

      <input
        type="time"
        name="hora"
        onChange={handleChange}
      />

      <button>
        Reservar
      </button>

    </form>

  );
}

export default ReservationForm;