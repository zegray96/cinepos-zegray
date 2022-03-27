import Grid from "@mui/material/Grid";
import logo from "../img/logo.svg";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { Button } from "primereact/button";

export default function NavBar() {
  let isVisibleItems = false;

  // Cuando se cambie el tamaño de pantalla se reestableceran los valores
  window.addEventListener("resize", function () {
    isVisibleItems = false;
    document.getElementById("divMenuItems").classList.remove("hideMenu");
    document.getElementById("divMenuItems").classList.remove("showMenu");
    document.getElementById("hamburgerButton").classList.remove("is-active");
  });

  // Funcion para mostrar el menu cuando tenemos vista de celular - tablet
  const displayItems = () => {
    isVisibleItems = isVisibleItems ? false : true;
    if (isVisibleItems) {
      document.getElementById("divMenuItems").classList.add("showMenu");
      document.getElementById("divMenuItems").classList.remove("hideMenu");

      document.getElementById("hamburgerButton").classList.remove("is-active");
      document.getElementById("hamburgerButton").classList.add("is-active");
    } else {
      document.getElementById("divMenuItems").classList.add("hideMenu");
      document.getElementById("divMenuItems").classList.remove("showMenu");

      document.getElementById("hamburgerButton").classList.add("is-active");
      document.getElementById("hamburgerButton").classList.remove("is-active");
    }
  };

  return (
    <>
      {/* <div className="row navBar">
        <div className="col-6 lg:col-12 menuLogo">
          <img src={logo} alt="" />
        </div>

        <div className="col-6 menuIcon">
          <i
            id="menuButton"
            className="pi pi-bars menuButton"
            style={{ fontSize: "2em" }}
            onClick={() => displayItems()}
          ></i>
        </div>

        <div className="col-12 lg:col-12 menuItems" id="menuItems">
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Relojes</a>
            </li>
            <li>
              <a href="#">Acero Blanco</a>
            </li>
            <li>
              <a href="#">Acero Dorado</a>
            </li>
            <li>
              <a href="#">Acero Quirúrgico</a>
            </li>
          </ul>
        </div>
      </div> */}

      <header className="nav">
        <div className="firstDiv">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="hamburguerDiv">
            <button id="hamburgerButton" onClick={() => displayItems()}
              className="hamburger hamburger--collapse"
              type="button"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>

            {/* <a href="#" onClick={() => displayItems()}>
              <i
                id="menuButton"
                className="pi pi-bars menuButton"
                style={{ fontSize: "2em" }}
              ></i>
            </a> */}
          </div>
        </div>

        <div className="secondDiv">
          <div className="cartButton">
            <a href="#">
              <i
                className="pi pi-shopping-cart"
                style={{ fontSize: "2em" }}
              ></i>
            </a>
          </div>
        </div>

        <nav className="divMenuItems" id="divMenuItems">
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Relojes</a>
            </li>
            <li>
              <a href="#">Acero Blanco</a>
            </li>
            <li>
              <a href="#">Acero Dorado</a>
            </li>
            <li>
              <a href="#">Acero Quirúrgico</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
