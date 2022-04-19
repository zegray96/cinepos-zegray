import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const { quantityCart } = useContext(CartContext);

  return (
    <div className="cartButton">
      <Link to="/cart" className="no-underline">
        <i className="pi pi-shopping-cart p-overlay-badge" style={{ fontSize: "2em" }}>
          <span className="p-badge p-component p-badge-no-gutter">{quantityCart}</span>
        </i>
      </Link>
    </div>
  );
}
