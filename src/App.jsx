import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    password: "",
    tipo_usuario: "",
  });

  const [mensaje, setMensaje] = useState("");

  const cambiarDatos = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const registrar = async (e) => {
    e.preventDefault();

    const respuesta = await fetch("http://localhost/react/registrar.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const datos = await respuesta.json();
    setMensaje(datos.message);
  };

  return (
    <div className="container">
      <h2>Registro de Usuario</h2>

      <form onSubmit={registrar}>
        <div className="form-group">
          <label>Nombre Completo</label>
          <input type="text" name="nombre" value={form.nombre} onChange={cambiarDatos} required />
        </div>

        <div className="form-group">
          <label>Correo Electrónico</label>
          <input type="email" name="correo" value={form.correo} onChange={cambiarDatos} required />
        </div>

        <div className="form-group">
          <label>Contraseña</label>
          <input type="password" name="password" value={form.password} onChange={cambiarDatos} required />
        </div>

        <div className="form-group">
          <label>Tipo de Usuario</label>
          <select name="tipo_usuario" value={form.tipo_usuario} onChange={cambiarDatos} required>
            <option value="">Seleccione una opción</option>
            <option value="Turista">Turista</option>
            <option value="Comerciante">Comerciante</option>
          </select>
        </div>

        <button type="submit">Registrarse</button>

        <p>{mensaje}</p>
      </form>
    </div>
  );
}

export default App;