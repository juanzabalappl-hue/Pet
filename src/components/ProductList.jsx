import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ productos, agregarAlCarrito }) {
  if (productos.length === 0) {
    return <p style={{ color: "#4b33a8", fontWeight: 600 }}>No se encontraron productos.</p>;
  }

  return (
    <div className="contenedor-productos">
      {productos.map((prod) => (
        <ProductCard key={prod.id} producto={prod} agregarAlCarrito={agregarAlCarrito} />
      ))}
    </div>
  );
}
