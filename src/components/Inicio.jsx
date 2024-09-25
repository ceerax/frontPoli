import React from "react";
import { Link } from "react-router-dom";

// Componente funcional Inicio que contiene la estructura de la página principal
const Inicio = () => {
  return (
    <div>
      {/* Barra de navegación con fondo oscuro */}
      <nav className="navbar navbar-light  bg-dark">
        <div class="container-fluid">
          {/* Marca de la compañía, en este caso "Ceerax", con color blanco */}
          <Link to="/" class="navbar-brand  text-white">Ceerax</Link>

          {/* Lista de navegación alineada a la derecha */}
          <ul class="nav justify-content-end">
            {/* Enlace de navegación activo */}
            <li class="nav-item">
              <Link to="/Mv" class="nav-link active" aria-current="page" href="#">
                Active
              </Link>
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

      {/* Sección principal del cuerpo de la página */}
      <body>
        {/* Div centralizado vertical y horizontalmente con fondo azul claro */}
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: '50vh', backgroundColor: '#98c1df' }} 
        >
          {/* Contenido centrado con ícono y texto */}
          <div class="text-center">
            <i class="bi-truck fs-1"></i> {/* Icono de un camión */}
            <h1 class="display-4">Logística</h1> {/* Título principal */}
            <p class="lead">CEERAX</p> {/* Subtítulo */}
            <button class="btn btn-primary">Rotar de puesto</button> {/* Botón primario */}
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
          style={{ backgroundColor: '#FFD700', height: '50vh' }} 
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <h1 className="text-center">Título Centrados</h1> {/* Título centrado */}

          {/* Contenedor para las tarjetas */}
          <div className="container">
            <div className="row">
              {/* Tarjetas de la primera fila */}
              <div className="col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Tarjeta 1</h5>
                    <p className="card-text">Contenido de la tarjeta 1.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Tarjeta 2</h5>
                    <p className="card-text">Contenido de la tarjeta 2.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Tarjetas de la segunda fila */}
              <div className="col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Tarjeta 3</h5>
                    <p className="card-text">Contenido de la tarjeta 3.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Tarjeta 4</h5>
                    <p className="card-text">Contenido de la tarjeta 4.</p>
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
