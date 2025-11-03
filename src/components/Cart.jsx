import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Cart({ carrito, setCarrito }) {
  const [subtotal, setSubtotal] = useState(0);
  const [descuento, setDescuento] = useState(0);
  const [total, setTotal] = useState(0);
  const [comprado, setComprado] = useState(false);

  // Calcular totales
  useEffect(() => {
    const sub = carrito.reduce((acc, p) => acc + (p.precioFinal || p.precio) * p.cantidad, 0);
    const desc = carrito.length >= 3 ? sub * 0.1 : 0;
    const tot = sub - desc;

    setSubtotal(sub);
    setDescuento(desc);
    setTotal(tot);

    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const eliminarProducto = (id) => {
    setCarrito(carrito.filter((p) => p.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const comprar = () => {
    setCarrito([]);
    setComprado(true);
    setTimeout(() => setComprado(false), 3000);
  };

  return (
    <section className="carrito-contenedor">
      <h2 className="titulo-principal">Tu carrito</h2>

      {/* 🔹 Botón para volver */}
      <Link to="/" className="boton-volver">
        ← Volver a la tienda
      </Link>

      {carrito.length === 0 ? (
        <p className="carrito-vacio">Tu carrito está vacío 😿</p>
      ) : (
        <>
          <div className="carrito-productos">
            {carrito.map((prod) => (
              <div key={prod.id} className="carrito-producto">
                <img src={prod.imagen} alt={prod.titulo} className="carrito-producto-imagen" />
                <h3>{prod.titulo}</h3>
                <p>Cantidad: {prod.cantidad}</p>
                <p>Precio c/u: ${prod.precioFinal || prod.precio}</p>
                <p>Subtotal: ${(prod.precioFinal || prod.precio) * prod.cantidad}</p>
                <button className="carrito-producto-eliminar" onClick={() => eliminarProducto(prod.id)}>
                  Eliminar
                </button>
              </div>
            ))}
          </div>

          <div className="carrito-acciones">
            <div className="carrito-acciones-izquierda">
              <button className="carrito-acciones-vaciar" onClick={vaciarCarrito}>
                Vaciar carrito
              </button>
            </div>
            <div className="carrito-acciones-derecha">
              <div className="carrito-acciones-total">
                <p>Subtotal:</p>
                <p>${subtotal}</p>
              </div>
              <div className="carrito-acciones-total">
                <p>Descuento:</p>
                <p>${descuento.toFixed(2)}</p>
              </div>
              <div className="carrito-acciones-total">
                <p>Total:</p>
                <p>${total.toFixed(2)}</p>
              </div>
              <button className="carrito-acciones-comprar" onClick={comprar}>
                Comprar ahora
              </button>
            </div>
          </div>
        </>
      )}

      {comprado && <p className="carrito-comprado">¡Gracias por tu compra! 🐾</p>}
    </section>
  );
}
