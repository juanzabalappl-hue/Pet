import React, { useState, useEffect } from "react";

export default function SearchBar({ productos: productosOriginales, setProductos }) {
  const [termino, setTermino] = useState("");
  const [sinResultados, setSinResultados] = useState(false);

  // 🔹 Función para eliminar acentos y normalizar texto
  const normalizar = (texto) =>
    texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  useEffect(() => {
    if (termino.trim() === "") {
      // Si el campo está vacío, mostramos todos los productos
      setProductos(productosOriginales);
      setSinResultados(false);
      return;
    }

    // 🔍 Filtramos los productos (parciales, sin acentos, sin mayúsculas)
    const filtrados = productosOriginales.filter((p) => {
      const titulo = normalizar(p.titulo);
      const categoria = normalizar(p.categoria.nombre);
      const busqueda = normalizar(termino);
      return titulo.includes(busqueda) || categoria.includes(busqueda);
    });

    setProductos(filtrados);
    setSinResultados(filtrados.length === 0);
  }, [termino, productosOriginales, setProductos]);

  return (
    <div>
      <div className="buscador">
        <input
          type="text"
          value={termino}
          onChange={(e) => setTermino(e.target.value)}
          placeholder="Buscar productos..."
        />
        <i className="bi bi-search"></i>
      </div>

      {sinResultados && (
        <p style={{ color: "#961818", fontWeight: "600", marginTop: "0.5rem" }}>
          No se encontraron productos que coincidan con “{termino}” 😿
        </p>
      )}
    </div>
  );
}
