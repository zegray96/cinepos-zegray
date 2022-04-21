import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [articlesCart, setArticlesCart] = useState([]);

  const addItem = (item, quantity) => {
    // Verificamos que no exista el articulo en el carrito, si existe actualizare la cantidad de el art en el carrito
    let articleInCart = isInCart(item.id);

    if (articleInCart) {
      // sumo la cantidad que ya tenia, mas la nueva que añado
      quantity = articleInCart.quantity + quantity;
      
      if (quantity > articleInCart.stock) {
        return "Cantidad supera el stock actual";
      }

      /** Remove article */
      // Buscamos el index de acuerdo al id
      let index = articlesCart.findIndex(
        (element) => element.id == item.id
      );
      // eliminamos el articulo del array
      articlesCart.splice(index, 1);
      /** End remove article */
    }

    // añadimos atributos utiles
    item["quantity"] = quantity;
    item["subtotal"] = quantity * item.price;
    // agregamos el item al carro
    setArticlesCart([...articlesCart, ...[item]]);
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
    } else {
      console.log("Articulo no encontrado en carrito");
    }
  };

  const clear = () => {
    setArticlesCart([]);
  };

  const isInCart = (id) => {
    return articlesCart.find((element) => element.id == id);
  };

  const getItemsCountCart = () => {
    let count = 0;
    articlesCart.map((article) => {
      count = count + article.quantity;
    });
    return count;
  };

  const getTotalCart = () => {
    let total = 0;
    articlesCart.map((article) => {
      total = total + article.subtotal;
    });
    return total;
  };

  useEffect(() => {
    getItemsCountCart();
    getTotalCart();
  }, [articlesCart]);

  return (
    <>
      <CartContext.Provider
        value={{
          addItem,
          removeItem,
          clear,
          articlesCart,
          getItemsCountCart,
          getTotalCart
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}
