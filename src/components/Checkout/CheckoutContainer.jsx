import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutForm from "./CheckoutForm";
export default function CheckoutContainer() {
  const { articlesCart } = useContext(CartContext);
  const {totalCart } = useContext(CartContext);

  return (
    <div className="container-md mt-5">
      <p className="text-4xl">Checkout</p>
      <CheckoutForm articlesCart={articlesCart} totalCart={totalCart}/>
    </div>
  );
}
