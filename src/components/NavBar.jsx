import React, { useContext, useState } from "react";
import logo from "../img/logo.svg";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";

export default function NavBar() {
  const { countCart } = useContext(CartContext);
  const [isVisibleItems, setIsVisibleItems] = useState(false);
  const [visibleSearch, setVisibleSearch] = useState(false);

  const itemsMenu = [
    {
      title: "Inicio",
      url: "/",
    },
    {
      title: "Relojes",
      url: "/category/relojes",
    },
    {
      title: "Acero Blanco",
      url: "/category/acero-blanco",
    },
    {
      title: "Acero Dorado",
      url: "/category/acero-dorado",
    },
    {
      title: "Acero Quirúrgico",
      url: "/category/acero-quirurgico",
    },
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
      <Sidebar
        visible={visibleSearch}
        position="top"
        onHide={() => setVisibleSearch(false)}
      >
        <div className="row justify-content-center">
          <div className="col-12 md:col-6">
            <div className="p-inputgroup">
              <InputText placeholder="Buscar" />
              <Button icon="pi pi-search" className="p-button-info" />
            </div>
          </div>
        </div>
      </Sidebar>
      <div className="greek-pattern"></div>
      <header className="header">
        <div className="firstDiv">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
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
          <div className="flex align-items-center " >
            <i className="text-white pi pi-search mr-3 ml-3 cursor-pointer" style={{ fontSize: "1.5em" }} onClick={() => setVisibleSearch(true)}></i>
          </div>
          {countCart && <CartWidget />}
        </div>

        <nav className={`divItemsMenu ${isVisibleItems ? "showNav" : ""}`}>
          <ul>
            {itemsMenu.map((item) => (
              <li key={item.title}>
                <Link to={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
