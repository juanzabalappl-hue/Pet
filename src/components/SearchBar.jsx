import React, { useState } from "react";

export default function SearchBar({ productos, setProductos }) {
  const [termino, setTermino] = useState("");

  const filtrar = () => {
    const filtrados = productos.filter((p) =>
      p.titulo.toLowerCase().includes(termino.toLowerCase()) ||
      p.categoria.nombre.toLowerCase().includes(termino.toLowerCase())
    );
    setProductos(filtrados);
  };

  return (
    <div className="buscador">
      <input
        type="text"
        value={termino}
        onChange={(e) => setTermino(e.target.value)}
        placeholder="Buscar productos..."
      />
      <i className="bi bi-search" onClick={filtrar}></i>
    </div>
  );
}
