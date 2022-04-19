import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [articlesCart, setArticlesCart] = useState([]);
  const [quantityCart, setQuantityCart] = useState(0);
  const [totalCart, setTotalCart] = useState(0);

  const addItem = (item, quantity) => {
    // Verificamos que no exista el articulo en el carrito
    if (isInCart(item.id)) {
      console.log("Ya existe el articulo en el carrito");
    } else {
      let subtotal = quantity * item.price;
      // añadimos atributos utiles
      item["quantity"] = quantity;
      item["subtotal"] = quantity * item.price;
      // agregamos el item al carro
      setArticlesCart([...articlesCart, ...[item]]);
      // actualizamos la cantidad
      setQuantityCart(quantityCart + quantity);
      //  actualizamos el total
      setTotalCart(totalCart + subtotal);
    }
  };

  const removeItem = (article) => {
    // hacemos una copia del array articulos
    let array = [...articlesCart];
    // Buscamos el index de acuerdo al id
    let index = array.findIndex((element) => element.id == article.id);
    if (index >= 0) {
      // eliminamos y seteamos el nuevo array
      array.splice(index, 1);
      setArticlesCart(array);
      //  actualizamos la cantidad del carrito
      setQuantityCart(quantityCart - article.quantity);
      // actualizamos el total del carrito
      setTotalCart(totalCart - article.subtotal);
    } else {
      console.log("Articulo no encontrado en carrito");
    }
  };

  const clear = () => {
    setArticlesCart([]);
    setQuantityCart(0);
    setTotalCart(0);
  };

  const isInCart = (id) => {
    return articlesCart.find((element) => element.id == id);
  };

  return (
    <>
      <CartContext.Provider
        value={{
          addItem,
          removeItem,
          clear,
          quantityCart,
          totalCart,
          articlesCart,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}
