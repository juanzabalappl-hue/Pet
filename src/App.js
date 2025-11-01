import React from "react";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "toastify-js/src/toastify.css";

function App() {
  return (
    <div className="wrapper">
      <aside>
        <header>
          <h1 className="logo">PetMarket Online</h1>
        </header>

        <nav>
          <ul className="menu">
            <li>
              <button id="todos" className="boton-menu boton-categoria active">
                <i className="bi bi-hand-index-thumb-fill"></i> Todos los productos
              </button>
            </li>
            <li>
              <button id="Accesorios" className="boton-menu boton-categoria">
                <i className="bi bi-hand-index-thumb"></i> Accesorios
              </button>
            </li>
            <li>
              <button id="Juguetes" className="boton-menu boton-categoria">
                <i className="bi bi-hand-index-thumb"></i> Juguetes
              </button>
            </li>
            <li>
              <button id="Higiene" className="boton-menu boton-categoria">
                <i className="bi bi-hand-index-thumb"></i> Higiene
              </button>
            </li>
            <li>
              <a className="boton-menu boton-carrito" href="./carrito.html">
                <i className="bi bi-cart-fill"></i> Carrito{" "}
                <span id="numerito" className="numerito">0</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="buscador" style={{ marginBottom: "20px" }}>
          <input type="text" id="input-busqueda" placeholder="Buscar productos..." />
          <i className="bi bi-search" id="boton-buscar"></i>
        </div>

        <div id="user-area">
          <button id="btn-google">Iniciar sesión con Google</button>
          <button id="btn-logout" style={{ display: "none" }}>
            Cerrar sesión
          </button>

          <div id="usuario-info" style={{ display: "none" }}>
            <img id="user-photo" src="" alt="Foto" width="48" />
            <div id="user-name"></div>
            <div id="user-email"></div>
          </div>
        </div>

        <footer>
          <p className="texto-footer">solo peludos</p>
        </footer>
      </aside>

      <main>
        <h2 className="titulo-principal" id="titulo-principal">
          Todos los productos
        </h2>
        <div id="contenedor-productos" className="contenedor-productos"></div>
      </main>

      <a
        href="https://wa.me/573122406712?text=Hola,%20necesito%20ayuda%20con%20mi%20compra%20en%20PetMarket%20Online"
        className="btn-soporte"
        target="_blank"
        rel="noopener noreferrer"
        title="Soporte técnico"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </div>
  );
}

export default App;
