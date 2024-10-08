import React from 'react'; // Importamos React para utilizar JSX
import '../css/Registro.css'
import { Link } from 'react-router-dom'; //Redireccionamiento 


// Componente funcional Registro que representa la página de registro
const Registro = () => {
  return (
    <div className="Registro-container Regi-body"> {/* Contenedor principal que aloja el formulario de registro */}
      <div className="form"> {/* Contenedor específico para el formulario de registro */}
        <ul className="reg-nav"> {/* Lista de navegación para cambiar entre iniciar sesión y registrarse */}
          <li><a href="#">Iniciar Sesión</a></li> {/* Enlace a la página de inicio de sesión */}
          <li  className="active"> <Link to="/">login</Link></li> {/* Enlace activo que indica que estamos en la página de registro */}
        </ul>
        <form className='Registro-container'> {/* Elemento de formulario que captura la información del nuevo usuario */}
          {/* Campo de entrada para el nombre del usuario */}
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label> {/* Etiqueta para el campo de nombre */}
            <input 
              type="text" 
              id="nombre" 
              name="nombre" 
              required // Campo requerido para evitar envíos vacíos
            />
          </div>
          {/* Campo de entrada para el apellido del usuario */}
          <div className="reg-form-group"> 
            <label htmlFor="apellido">Apellido:</label> {/* Etiqueta para el campo de apellido */}
            <input 
              type="text" 
              id="apellido" 
              name="apellido" 
              required // Campo requerido para evitar envíos vacíos
            />
          </div>
          {/* Campo de entrada para el nombre de usuario */}
          <div className="form-group">
            <label  htmlFor="usuario">Usuario:</label> {/* Etiqueta para el campo de usuario */}
            <input 
              type="text" 
              id="usuario" 
              name="usuario" 
              required // Campo requerido para evitar envíos vacíos
            />
          </div>
          {/* Campo de entrada para el correo electrónico */}
          <div className="form-group">
            <label  htmlFor="email">Email:</label> {/* Etiqueta para el campo de email */}
            <input 
              type="email" 
              id="email" 
              name="email" 
              required // Campo requerido para evitar envíos vacíos
            />
          </div>
          {/* Campo de entrada para la contraseña */}
          <div className="form-group">
            <label  htmlFor="password">Contraseña:</label> {/* Etiqueta para el campo de contraseña */}
            <input 
              type="password" 
              id="password" 
              name="password" 
              required // Campo requerido para evitar envíos vacíos
            />
          </div>
          {/* Campo de entrada para repetir la contraseña */}
          <div className="form-group">
            <label  htmlFor="confirm_password">Repetir contraseña:</label> {/* Etiqueta para el campo de confirmación de contraseña */}
            <input 
              type="password" 
              id="confirm_password" 
              name="confirm_password" 
              required // Campo requerido para evitar envíos vacíos
            />
          </div>
          {/* Botón para enviar el formulario de registro */}
          <button className='reg-button' type="submit"><Link to="/">Registrarse</Link> </button> {/* Botón que envía el formulario con los datos del nuevo usuario */}
        </form>
      </div> 
    </div>
  );
};

// Exportamos el componente Registro como el componente por defecto
export default Registro;
