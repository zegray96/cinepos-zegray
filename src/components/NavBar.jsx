import React, { useState } from "react";
import logo from "../img/logo.svg";
import CartWidget from "./CartWidget";

export default function NavBar() {
  const [isVisibleItems, setIsVisibleItems] = useState(false);

  const itemsMenu = [
    "Inicio",
    "Relojes",
    "Acero Blanco",
    "Acero Dorado",
    "Acero Quirúrgico",
  ];

  // Cuando se cambie el tamaño de pantalla se reestableceran los valores
  window.addEventListener("resize", function () {
    setIsVisibleItems(false);
  });

  // Funcion para mostrar el menu cuando tenemos vista de celular - tablet
  const displayItems = () => {
    setIsVisibleItems(isVisibleItems ? false : true);
  };

  return (
    <>
      <header className="header">
        <div className="firstDiv">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="hamburguerDiv">
            <button
              id="hamburgerButton"
              onClick={() => displayItems()}
              className={`hamburger hamburger--collapse ${
                isVisibleItems ? "is-active" : ""
              }`}
              type="button"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>

        <div className="secondDiv">
          <CartWidget />
        </div>

        <nav
          className={`divItemsMenu ${isVisibleItems ? "showNav" : ""}`}
          id="divItemsMenu"
        >
          <ul>
            {itemsMenu.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
