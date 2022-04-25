import { createContext, useContext, useEffect, useState } from "react";
import { ToastMessageContext } from "./ToastMessageContext";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const { showSuccess, showSuccessAddToCart, showInfo, showWarn, showError } =
    useContext(ToastMessageContext);
  const [articlesCart, setArticlesCart] = useState([]);
  const [countCart, setCountCart] = useState(0);
  const [totalCart, setTotalCart] = useState(0);

  const addItem = (item, quantity) => {
    // Creamos variable de auxiliar cantidad, que sera la que guardaremos. La original la usaremos para mostrar en el toast message
    let quantityAdd = quantity;

    // Verificamos que no exista el articulo en el carrito, si existe actualizare la cantidad de el art en el carrito
    let indexArticle = isInCart(item.id);

    if (indexArticle >= 0) {
      // obtenemos el articulo
      let articleInCart = articlesCart[indexArticle];

      // sumo la cantidad que ya tenia, mas la nueva que añado
      quantityAdd = articleInCart.quantity + quantityAdd;

      if (quantityAdd > articleInCart.stock) {
        return "Cantidad supera el stock actual";
      }

      // eliminamos el articulo del array
      articlesCart.splice(indexArticle, 1);
    }

    // añadimos atributos utiles
    item = { quantity: quantityAdd, ...item };
    item = { subtotal: quantityAdd * item.price, ...item };
    // agregamos el item al carro
    setArticlesCart([...articlesCart, item]);

    showSuccessAddToCart(quantity, item.title);
  };

  const removeItem = (article) => {
    // hacemos una copia del array articulos
    let newCart = [...articlesCart];
    // Filtramos el array pero sin el articulo que enviamos
    newCart = articlesCart.filter((e) => e.id != article.id);
    // si tenemos el mismo length, quiere decir que no encontro el articulo y los array quedaron como estaban
    if (newCart.length == articlesCart.length) {
      showError("Articulo no encontrado en carrito!");
    } else {
      setArticlesCart(newCart);
      showSuccess(`Se elimino ${article.title} del carrito!`);
    }
  };

  const clear = () => {
    setArticlesCart([]);
    showSuccess("Se eliminaron todos los articulos del carrito!");
  };

  const isInCart = (id) => {
    return articlesCart.findIndex((element) => element.id == id);
  };

  const updateCountCart = () => {
    //  reduce.(valorInicial, valorActual) => (function), valorInicial)
    setCountCart(
      articlesCart.reduce(
        (valorAnterior, valorActual) => valorAnterior + valorActual.quantity,
        0
      )
    );
  };

  const updateTotalCart = () => {
    //  reduce.(valorInicial, valorActual) => (function), valorInicial)
    setTotalCart(
      articlesCart.reduce(
        (valorAnterior, valorActual) => valorAnterior + valorActual.subtotal,
        0
      )
    );
  };

  // Cada vez que mi state de articulos se modifique, actualizare el total y contador de carrito
  useEffect(() => {
    updateCountCart();
    updateTotalCart();
  }, [articlesCart]);

  return (
    <>
      <CartContext.Provider
        value={{
          addItem,
          removeItem,
          clear,
          articlesCart,
          totalCart,
          countCart,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}
