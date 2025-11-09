import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { productos as productosData } from "./data";
import Sidebar from "./components/Sidebar";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import SupportButton from "./components/SupportButton";
import Cart from "./components/Cart";
import "./styles.css";

function App() {
  // Estado principal de productos
  const [productos, setProductos] = useState(productosData);
  const [productosOriginales] = useState(productosData);

  // Estado del carrito
  const [carrito, setCarrito] = useState(() => JSON.parse(localStorage.getItem("carrito")) || []);

  // Función para agregar productos al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((p) => p.id === producto.id);
      if (existe) {
        return prev.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      }
      return [
        ...prev,
        { ...producto, cantidad: 1, precioFinal: Math.round(producto.precio * 0.9) },
      ];
    });
  };

  return (
    <Router>
      <div className="wrapper">
        <Sidebar carrito={carrito} setProductos={setProductos} productos={productosData} />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* 🔍 Barra de búsqueda en tiempo real */}
                  <SearchBar
                    productos={productos}
                    setProductos={setProductos}
                    productosOriginales={productosOriginales}
                  />

                  <h2 className="titulo-principal">Todos los productos</h2>

                  <ProductList productos={productos} agregarAlCarrito={agregarAlCarrito} />

                  {/* 🔗 Enlace al carrito */}
                  <Link
                    to="/carrito"
                    style={{
                      display: "inline-block",
                      marginTop: "1.5rem",
                      background: "#4b33a8",
                      color: "#fff",
                      padding: "0.8rem 1.5rem",
                      borderRadius: "1rem",
                      textDecoration: "none",
                    }}
                  >
                    Ver carrito 🛒 ({carrito.reduce((acc, p) => acc + p.cantidad, 0)})
                  </Link>
                </>
              }
            />

            {/* 🛒 Página del carrito */}
            <Route path="/carrito" element={<Cart carrito={carrito} setCarrito={setCarrito} />} />
          </Routes>
        </main>

        <SupportButton />
      </div>
    </Router>
  );
}

export default App;
