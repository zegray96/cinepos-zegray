import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const { countCart } = useContext(CartContext);

  return (
    <div className="mr-3 ml-3 cartButton flex align-items-center">
      <Link to="/cart" className="no-underline">
        <i
          className="pi pi-shopping-cart p-overlay-badge"
          style={{ fontSize: "2em" }}
        >
          <span className="p-badge p-component p-badge-no-gutter p-badge-info">
            {countCart}
          </span>
        </i>
      </Link>
    </div>
  );
}
