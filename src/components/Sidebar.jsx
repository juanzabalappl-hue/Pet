import React, { useState, useEffect } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { Link } from "react-router-dom";


const firebaseConfig = {
  apiKey: "AIzaSyAuaWByo3uYzmU3jnhoZAZM1S79o3Uq1Xg",
  authDomain: "proyecto-petshop-6ea56.firebaseapp.com",
  projectId: "proyecto-petshop-6ea56",
  storageBucket: "proyecto-petshop-6ea56.appspot.com",
  messagingSenderId: "88005462823",
  appId: "1:88005462823:web:88b9509ed64c2bb01b3702",
  measurementId: "G-EXDPT7SSM8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function Sidebar({ carrito, setProductos, productos }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (usuario) => setUser(usuario));
  }, []);

  const loginGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      alert(err.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  const categorias = ["Todos", "Accesorios", "Juguetes", "Higiene"];

  const filtrarCategoria = (cat) => {
    if (cat === "Todos") {
      setProductos(productos);
    } else {
      setProductos(productos.filter((p) => p.categoria.id === cat));
    }
  };

  return (
    <aside>
      <header>
        <h1 className="logo">PetMarket Online</h1>
      </header>

      <nav>
        <ul className="menu">
          {categorias.map((cat) => (
            <li key={cat}>
              <button className="boton-menu boton-categoria" onClick={() => filtrarCategoria(cat)}>
                {cat}
              </button>
            </li>
          ))}
          <li>
            <Link to="/carrito" className="boton-menu boton-carrito">
              <i className="bi bi-cart-fill"></i> Carrito{" "}
              <span className="numerito">
                {carrito.reduce((acc, p) => acc + p.cantidad, 0)}
              </span>
            </Link>
          </li>

        </ul>
      </nav>

      <div id="user-area">
        {!user ? (
          <button onClick={loginGoogle}>Iniciar sesión con Google</button>
        ) : (
          <>
            <button onClick={logout}>Cerrar sesión</button>
            <div>
              <img src={user.photoURL} alt={user.displayName} width="48" />
              <div>{user.displayName}</div>
              <div>{user.email}</div>
            </div>
          </>
        )}
      </div>

      <footer>
        <p className="texto-footer">solo peludos</p>
      </footer>
    </aside>
  );
}
