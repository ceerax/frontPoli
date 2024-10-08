import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// Componente funcional Inicio que contiene la estructura de la página principal
const Inicio = () => {
  const manejarConsultaGuia = () => {
    // Mostrar la alerta de SweetAlert2
    Swal.fire({
      title: "Oops...",
      text: "No se encuentra la guía.",
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  };

  return (
    <div>
      {/* Barra de navegación con fondo oscuro */}
      <nav className="navbar navbar-light  bg-dark">
        <div class="container-fluid">
          {/* Marca de la compañía, en este caso "Ceerax", con color blanco */}
          <Link to="/inicio" class="navbar-brand  text-white">
            Ceerax
          </Link>

          {/* Lista de navegación alineada a la derecha */}
          <ul class="nav justify-content-end">
            {/* Enlace de navegación activo */}
            <li class="nav-item">
              <Link
                to="/inicio"
                class="nav-link active"
                aria-current="page"
                href="#"
              >
                Inicio
              </Link>
            </li>

            {/* Otros enlaces de navegación */}
            <li class="nav-item">
              <Link to={"/inicio"} class="nav-link text-white" href="#">
                Admin
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/Mv"} class="nav-link text-white" href="#">
                MV
              </Link>
            </li>

            {/* Botón primario dentro de la barra de navegación */}
            <button type="button" class="btn btn-primary">
              <Link style={{ color: 'white', textDecoration: 'none' }} to={"/"}>Cerrar Sesión</Link>
            </button>
          </ul>
        </div>
      </nav>

      {/* Sección principal del cuerpo de la página */}
      <body>
        {/* Div centralizado vertical y horizontalmente con fondo azul claro */}
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "50vh", backgroundColor: "#98c1df" }}
        >
          {/* Contenido centrado con ícono y texto */}
          <div class="text-center">
            <i class="bi-truck fs-1"></i> {/* Icono de un camión */}
            <h1 class="display-4">Logística</h1> {/* Título principal */}
            <p class="lead">CEERAX</p> {/* Subtítulo */}
            <input type="text" />
            <div className="container mt-3">
              <button className="btn btn-primary" onClick={manejarConsultaGuia}>
                Consultar guía
              </button>
            </div>
          </div>
        </div>

        {/* Carrusel de imágenes con indicadores */}
        <div style={{ maxWidth: "50%", margin: "auto" }}>
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            {/* Indicadores del carrusel */}
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            {/* Contenido del carrusel con tres imágenes */}
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://img.freepik.com/foto-gratis/mujer-equipo-seguridad-trabajando_23-2148976317.jpg?size=626&ext=jpg&ga=GA1.1.1665001397.1727230579&semt=ais_hybrid"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://img.freepik.com/foto-gratis/logistica-transporte-buques-carga-contenedores-aviones-carga-puente-grua-funcionamiento-astillero-al-amanecer-antecedentes-logisticos-industria-importacion-exportacion-transporte-ai-generativo_123827-24177.jpg?size=626&ext=jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://img.freepik.com/foto-gratis/joven-trabajando-almacen-cajas_1303-16617.jpg?size=626&ext=jpg&ga=GA1.1.1665001397.1727230579&semt=ais_hybrid"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>

            {/* Controles de navegación del carrusel */}
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* Sección amarilla con tarjetas centradas */}
        <div
          style={{ backgroundColor: "#FFD700", height: "50vh" }}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <h1 className="text-center">¿Como lo ayudamos?</h1>{" "}
          {/* Título centrado */}
          {/* Contenedor para las tarjetas */}
          <div className="container">
            <div className="row">
              {/* Tarjetas de la primera fila */}
              <div className="col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title">1.</h2>
                    <p className="card-text">
                      "Simplificamos su logística y contribuimos al mejoramiento
                      de su margen operativo."
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title">2.</h2>
                    <p className="card-text">
                      "Generamos experiencias positivas a sus clientes,
                      fidelizándolos a su marca."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Tarjetas de la segunda fila */}
              <div className="col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title">3.</h2>
                    <p className="card-text">
                      "Desarrollamos soluciones simples y flexibles adaptadas a
                      su negocio."
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title">4.</h2>
                    <p className="card-text">
                      "Diseñamos soluciones tecnológicas al servicio de la
                      logística."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>

      {/* Pie de página con fondo oscuro */}
      <footer className="bg-dark text-light mt-5">
        <div className="container py-4">
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
                  <a href="#" className="text-light">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light">
                    Acerca de
                  </a>
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
  );
};

export default Inicio;
