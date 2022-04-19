import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";
import { useContext, useEffect } from "react";
export default function CartContainer() {
  const { articlesCart } = useContext(CartContext);

  return (
    <div className="container-md mt-5">
      <h2>Mi Carrito</h2>
      <Cart articlesList={articlesCart} />
    </div>
  );
}
