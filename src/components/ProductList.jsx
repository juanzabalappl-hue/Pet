import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ productos, agregarAlCarrito }) {
  if (!Array.isArray(productos)) {
    return <p>Cargando productos...</p>;
  }

  if (productos.length === 0) {
    return <p>No hay productos disponibles.</p>;
  }

  return (
    <div className="contenedor-productos">
      {productos.map((producto) => (
        <ProductCard
          key={producto.id}
          producto={producto}
          agregarAlCarrito={agregarAlCarrito}
        />
      ))}
    </div>
  );
}


