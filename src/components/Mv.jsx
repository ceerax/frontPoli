import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Mv.css";


const Mv = () => {
  return (
    <div className="mv-container"> {/* Aplicamos una clase específica al contenedor principal */}
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-white">Ceerax</Link>

          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link to={"/Inicio"} className="nav-link active" aria-current="page" href="#">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to={"/"} className="nav-link text-white" href="#">Admin</Link>
            </li>
            <li className="nav-item">
              <Link to={"/Mv"} className="nav-link text-white" href="#">Link</Link>
            </li>
            <button type="button" className="btn btn-primary">
            <Link style={{ color: 'white', textDecoration: 'none' }} to={"/"}>Cerrar Sesión</Link></button>
          </ul>
        </div>
      </nav>

      <div className="container my-5 py-5 rounded" style={{ background: "linear-gradient(135deg, #74ebd5, #acb6e5)", padding: "40px", borderRadius: "15px" }}>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-lg" style={{ backgroundColor: "#fff4e3", borderRadius: "15px" }}>
              <div className="card-body">
                <i className="bi-people-fill fs-1 text-primary mb-3"></i>
                <h5 className="card-title">Misión</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-lg" style={{ backgroundColor: "#e3f2fd", borderRadius: "15px" }}>
              <div className="card-body">
                <i className="bi-eye-fill fs-1 text-success mb-3"></i>
                <h5 className="card-title">Visión</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-lg" style={{ backgroundColor: "#ffe4e1", borderRadius: "15px" }}>
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

      <footer className="bg-dark text-light mt-auto py-4 mv-footer"> {/* Aplicamos una clase específica al footer */}
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Sobre Nosotros</h5>
              <p>Somos una empresa dedicada a brindar soluciones innovadoras en logística y transporte.</p>
            </div>
            <div className="col-md-4">
              <h5>Enlaces Útiles</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light">Inicio</a></li>
                <li><a href="#" className="text-light">Servicios</a></li>
                <li><a href="#" className="text-light">Contacto</a></li>
                <li><a href="#" className="text-light">Acerca de</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Contacto</h5>
              <p>Email: contacto@empresa.com</p>
              <p>Teléfono: (123) 456-7890</p>
            </div>
          </div>

          <div className="text-center mt-4">
            <p>&copy; {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Mv;
