import React from 'react'
import { Link } from 'react-router-dom'

const Mv = () => {
  return (
    <div>

<nav className="navbar navbar-light  bg-dark">
        <div class="container-fluid">
          {/* Marca de la compañía, en este caso "Ceerax", con color blanco */}
          <Link to="/" class="navbar-brand  text-white">Ceerax</Link>

          {/* Lista de navegación alineada a la derecha */}
          <ul class="nav justify-content-end">
            {/* Enlace de navegación activo */}
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Active
              </a>
            </li>

            {/* Otros enlaces de navegación */}
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                Link
              </a>
            </li>

            {/* Botón primario dentro de la barra de navegación */}
            <button type="button" class="btn btn-primary">
              Primary
            </button>
          </ul>
        </div>
      </nav>
    <div
      className="container my-5 py-5 rounded"
      style={{
        background: "linear-gradient(135deg, #74ebd5, #acb6e5)", // Fondo degradado
        padding: "40px",
        borderRadius: "15px",
      }}
    >
      <div className="row text-center">
        {/* Columna Misión */}
        <div className="col-md-4 mb-4">
          <div
            className="card h-100 shadow-lg"
            style={{
              backgroundColor: "#fff4e3", // Fondo personalizado para la card
              borderRadius: "15px", // Bordes redondeados
            }}
          >
            <div className="card-body">
              <i className="bi-people-fill fs-1 text-primary mb-3"></i>
              <h5 className="card-title">Misión</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
            </div>
          </div>
        </div>

        {/* Columna Visión */}
        <div className="col-md-4 mb-4">
          <div
            className="card h-100 shadow-lg"
            style={{
              backgroundColor: "#e3f2fd", // Fondo personalizado para la card
              borderRadius: "15px",
            }}
          >
            <div className="card-body">
              <i className="bi-eye-fill fs-1 text-success mb-3"></i>
              <h5 className="card-title">Visión</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
            </div>
          </div>
        </div>

        {/* Columna Principios */}
        <div className="col-md-4 mb-4">
          <div
            className="card h-100 shadow-lg"
            style={{
              backgroundColor: "#ffe4e1", // Fondo personalizado para la card
              borderRadius: "15px",
            }}
          >
            <div className="card-body">
              <i className="bi-chat-left-text-fill fs-1 text-warning mb-3"></i>
              <h5 className="card-title">Principios</h5>
              <ul className="list-unstyled">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>      
    </div>
    <footer className="bg-dark text-light mt-auto py-4">
        <div className="container">
          <div className="row">
            {/* Sección "Sobre Nosotros" */}
            <div className="col-md-4">
              <h5>Sobre Nosotros</h5>
              <p>
                Somos una empresa dedicada a brindar soluciones innovadoras en
                logística y transporte.
              </p>
            </div>

            {/* Enlaces útiles */}
            <div className="col-md-4">
              <h5>Enlaces Útiles</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-light">Inicio</a>
                </li>
                <li>
                  <a href="#" className="text-light">Servicios</a>
                </li>
                <li>
                  <a href="#" className="text-light">Contacto</a>
                </li>
                <li>
                  <a href="#" className="text-light">Acerca de</a>
                </li>
              </ul>
            </div>

            {/* Información de contacto */}
            <div className="col-md-4">
              <h5>Contacto</h5>
              <p>Email: contacto@empresa.com</p>
              <p>Teléfono: (123) 456-7890</p>
            </div>
          </div>

          {/* Derechos reservados */}
          <div className="text-center mt-4">
            <p>
              &copy; {new Date().getFullYear()} Mi Empresa. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Mv