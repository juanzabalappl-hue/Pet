import React from "react";

export default function Header({ titulo }) {
  return (
    <header>
      <h1 className="logo">{titulo}</h1>
    </header>
  );
}
