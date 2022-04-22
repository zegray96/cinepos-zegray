import { createContext, useContext, useEffect, useState } from "react";
import { ToastMessageContext } from "./ToastMessageContext";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const {
    showSuccess,
    showSuccessAddToCart,
    showInfo,
    showWarn,
    showError,
  } = useContext(ToastMessageContext);
  const [articlesCart, setArticlesCart] = useState([]);

  const addItem = (item, quantity) => {
    // Creamos variable de auxiliar cantidad, que sera la que guardaremos. La original la usaremos para mostrar en el toast message
    let quantityAdd = quantity;

    // Verificamos que no exista el articulo en el carrito, si existe actualizare la cantidad de el art en el carrito
    let articleInCart = isInCart(item.id);

    if (articleInCart) {
      // sumo la cantidad que ya tenia, mas la nueva que añado
      quantityAdd = articleInCart.quantity + quantityAdd;

      if (quantityAdd > articleInCart.stock) {
        return "Cantidad supera el stock actual";
      }

      /** Remove article */
      // Buscamos el index de acuerdo al id
      let index = articlesCart.findIndex((element) => element.id == item.id);
      // eliminamos el articulo del array
      articlesCart.splice(index, 1);
      /** End remove article */
    }

    // añadimos atributos utiles
    item = {quantity: quantityAdd, ...item};
    item = {subtotal: quantityAdd * item.price, ...item};
    // agregamos el item al carro
    setArticlesCart([...articlesCart, item])

    showSuccessAddToCart(quantity, item.title);
  };

  /** Delete item */
  const openDeleteConfirmDialog = (article) => {
    confirmDialog({
      message: "Esta seguro de eliminar el articulo del carrito?",
      header: "Mensaje de confirmación",
      icon: "pi pi-info-circle",
      acceptClassName: "p-button-outlined p-button-danger",
      rejectClassName: "p-button-outlined p-button-primary",
      acceptLabel: "Si",
      accept: () => removeItem(article),
    });
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
      showSuccess(`Se elimino ${article.title} del carrito!`)
    } else {
      showError("Articulo no encontrado en carrito!");
    }
  };
  /** End delete item */

  /** Clear */
  const openClearConfirmDialog = (article) => {
    confirmDialog({
      message: "Esta seguro de todos los articulos del carrito?",
      header: "Mensaje de confirmación",
      icon: "pi pi-info-circle",
      acceptClassName: "p-button-outlined p-button-danger",
      rejectClassName: "p-button-outlined p-button-primary",
      acceptLabel: "Si",
      accept: () => clear(),
    });
  };

  const clear = () => {
    setArticlesCart([]);
    showSuccess("Se eliminaron todos los articulos del carrito!")
  };

  /** End clear */


  const isInCart = (id) => {
    return articlesCart.find((element) => element.id == id);
  };

  const getItemsCountCart = () => {
    let count = 0;
    articlesCart.map((article) => {
      count += article.quantity;
    });
    return count;
  };

  const getTotalCart = () => {
    let total = 0;
    articlesCart.map((article) => {
      total += article.subtotal;
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
          openDeleteConfirmDialog,
          openClearConfirmDialog,
          articlesCart,
          getItemsCountCart,
          getTotalCart,
        }}
      >
        <ConfirmDialog />
        {children}
      </CartContext.Provider>
    </>
  );
}
