import React from "react";

export default function ProductCard({ producto, agregarAlCarrito }) {
  const descuento = 0.1;
  const precioFinal = Math.round(producto.precio * (1 - descuento));

  return (
    <div className="producto">
      <div className="producto-descuento">-10%</div>
      <img className="producto-imagen" src={producto.imagen} alt={producto.titulo} />
      <div className="producto-detalles">
        <h3 className="producto-titulo">{producto.titulo}</h3>
        <p className="producto-precio">
          <span className="precio-final">${precioFinal}</span>
          <s className="precio-original">${producto.precio}</s>
        </p>
        <button className="producto-agregar" onClick={() => agregarAlCarrito(producto)}>
          Agregar
        </button>
      </div>
    </div>
  );
}
