import React, { useState } from "react"; // Importamos React y useState para manejar el estado
import { Link, useNavigate } from "react-router-dom"; // Importamos Link y useNavigate para la navegación
import Swal from 'sweetalert2'; // Importamos SweetAlert2
import '../css/Login.css'

// Componente funcional Login que representa la página de inicio de sesión
const Login = () => {
  const [username, setUsername] = useState(""); // Estado para el nombre de usuario
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const navigate = useNavigate(); // Hook para redirigir a otra página

  // Función para manejar el inicio de sesión
  const handleLogin = () => {
    if (username === "politecnico" && password === "123456") {
      // Si el usuario y contraseña son correctos, redirigimos a la página de inicio
      navigate("/Inicio");
    } else {
      // Si son incorrectos, mostramos una alerta de SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Usuario o contraseña inválido',
        confirmButtonText: 'Aceptar'
      });
    }
  };

  return (
    <div className="Login-body">
      <div className="Login-container"> {/* Contenedor principal para el formulario */}
        <div className="form"> {/* Contenedor específico para el formulario de inicio de sesión */}
          <h1>Iniciar Sesión</h1> {/* Título del formulario */}
          <form> {/* Elemento de formulario que captura las credenciales del usuario */}
            {/* Campo de entrada para el nombre de usuario */}
            <div className="form-group">
              <label htmlFor="username">Usuario:</label> {/* Etiqueta para el campo de usuario */}
              <input
                type="text"
                id="username"
                name="username"
                value={username} // Se enlaza con el estado de username
                onChange={(e) => setUsername(e.target.value)} // Actualizamos el estado cuando el usuario cambia el valor
                required
              />
            </div>
            {/* Campo de entrada para la contraseña */}
            <div className="form-group">
              <label htmlFor="password">Contraseña:</label> {/* Etiqueta para el campo de contraseña */}
              <input
                type="password"
                id="password"
                name="password"
                value={password} // Se enlaza con el estado de password
                onChange={(e) => setPassword(e.target.value)} // Actualizamos el estado cuando el usuario cambia el valor
                required
              />
            </div>
            {/* Botón de inicio de sesión */}
            <button className="btn btn-primary" type="button" onClick={handleLogin}>
              Iniciar Sesión
            </button>

            {/* Enlace para recuperación de contraseña */}
            <p>¿Olvidaste tu contraseña?</p>
            {/* Enlace que redirige a la página de registro */}
            <p>
              <Link to="/Registro">Registro</Link> {/* Navegación a la ruta de registro */}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

// Exportamos el componente Login como el componente por defecto
export default Login;
