import { useRef, createContext } from "react";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export const ToastMessageContext = createContext();

export default function ToastMessageContextProvider({ children }) {
  const toast = useRef(null);
  const navigate = useNavigate();

  const showSuccess = (detail) => {
    toast.current.show({
      severity: "success",
      summary: "Realizado!",
      detail: detail,
      life: 15000,
    });
  };

  const showInfo = (detail) => {
    toast.current.show({
      severity: "info",
      summary: "Informacion!",
      detail: detail,
      life: 15000,
    });
  };

  const showWarn = (detail) => {
    toast.current.show({
      severity: "warn",
      summary: "Adevertencia!",
      detail: detail,
      life: 15000,
    });
  };

  const showError = (detail) => {
    toast.current.show({
      severity: "error",
      summary: "Error!",
      detail: detail,
      life: 15000,
    });
  };

  const showSuccessAddToCart = (quantity, articleTitle) => {
    toast.current.show({
      severity: "success",
      life: 15000,
      content: (
        <div className="flex flex-row">
          <span className="p-toast-message-icon pi pi-check"></span>
          <div className="p-toast-message-text">
            <span className="p-toast-summary">Realizado!</span>
            <div className="p-toast-detail">
              Se añadieron <strong>({quantity})</strong> {articleTitle} al
              carrito!
            </div>
            <div className="mt-4">
              <Button
                onClick={() => redirectToCart()}
                label="Ver Carrito"
                icon="pi pi-shopping-cart"
                className="p-button-sm p-button-info"
              />
            </div>
          </div>
        </div>
      ),
    });
  };

  const redirectToCart = () => {
    //   redirigmos al carrito y limpiamos mensajes
    navigate("/cart");
    toast.current.clear();
  };

  return (
    <ToastMessageContext.Provider
      value={{
        showSuccess,
        showInfo,
        showWarn,
        showError,
        showSuccessAddToCart
      }}
    >
      <Toast ref={toast} />
      {children}
    </ToastMessageContext.Provider>
  );
}
