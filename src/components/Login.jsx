import React from "react"; // Importamos React para utilizar JSX
import { Link } from "react-router-dom"; // Importamos Link de react-router-dom para la navegación entre rutas
import '../css/Login.css'


// Componente funcional Login que representa la página de inicio de sesión
const Login = () => {
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
                required // Campo requerido para que no se envíe el formulario vacío
              />  
            </div>
            {/* Campo de entrada para la contraseña */}
            <div className="form-group">
              <label htmlFor="password">Contraseña:</label> {/* Etiqueta para el campo de contraseña */}
              <input 
                type="password" 
                id="password" 
                name="password" 
                required // Campo requerido para que no se envíe el formulario vacío
              />
            </div>
            {/* Botón de inicio de sesión */}
            <button className="Login-button "  type="submit"><Link to="/Inicio">Registrarse</Link></button> {/* Botón que envía el formulario */}

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
