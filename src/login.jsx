import { Link } from "react-router-dom";
import "./App.css";

function Login() {
  return (
    <div className="container">
      <h2>Iniciar Sesión</h2>

      <form>
        <div className="form-group">
          <label>Correo Electrónico</label>
          <input
            type="email"
            placeholder="Ingresa tu correo"
            required
          />
        </div>

        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>

        <button type="submit">Ingresar</button>

        <p style={{ marginTop: "15px", textAlign: "center" }}>
          ¿No tienes cuenta?{" "}
          <Link
            to="/registro"
            style={{
              color: "#007bff",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Crear una
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
