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
    document.getElementById("menuItems").classList.remove("hideMenu");
    document.getElementById("menuItems").classList.remove("showMenu");
    document.getElementById("menuButton").classList.add("pi-bars");
    document.getElementById("menuButton").classList.remove("pi-times");
  });

  // Funcion para mostrar el menu cuando tenemos vista de celular - tablet
  const displayItems = () => {
    isVisibleItems = isVisibleItems ? false : true;
    if (isVisibleItems) {
      document.getElementById("menuItems").classList.add("showMenu");
      document.getElementById("menuItems").classList.remove("hideMenu");

      document.getElementById("menuButton").classList.remove("pi-bars");
      document.getElementById("menuButton").classList.add("pi-times");
    } else {
      document.getElementById("menuItems").classList.add("hideMenu");
      document.getElementById("menuItems").classList.remove("showMenu");

      document.getElementById("menuButton").classList.add("pi-bars");
      document.getElementById("menuButton").classList.remove("pi-times");
    }
  };

  return (
    <>
      <div className="row navBar">
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
      </div>
    </>
  );
}
