// Importamos los componentes necesarios desde react-router-dom para manejar las rutas de la aplicación
import { Routes, Route } from "react-router-dom";

// Importamos los componentes que se utilizarán en las diferentes rutas
import Login from "./components/Login"; // Componente de inicio de sesión
import Registro from "./components/Registro"; // Componente de registro de usuario
import Inicio from "./components/Inicio"; // Componente de la página de inicio
import MV from "./components/Mv"; // Componente de la página de inicio

// Definimos el componente principal de la aplicación
function App() {
  // Renderizamos la estructura de la aplicación
  return (
    <div>
      {/* 
        Definimos las rutas de la aplicación dentro de un contenedor <Routes>.
        Cada <Route> especifica un camino y el componente que se debe renderizar en esa ruta.
      */}
      <Routes>
        {/* Ruta para el componente de inicio de sesión, se activa en la raíz "/" */}
        <Route path="/" element={<Login />} />
        
        {/* Ruta para el componente de registro, se activa en "/Registro" */}
        <Route path="/Registro" element={<Registro />} /> 
        
        {/* Ruta para el componente de inicio, se activa en "/Inicio" */}
        <Route path="/Inicio" element={<Inicio />} /> 
        {/* Ruta para el componente de inicio, se activa en "/MV" */}
        <Route path="/Mv" element={<MV />} /> 
      </Routes>
    </div>
  );
}

// Exportamos el componente App como el componente por defecto para su uso en otras partes de la aplicación
export default App;
