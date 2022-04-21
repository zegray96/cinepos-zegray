import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";

export default function Cart({ articlesList }) {
  const {
    openDeleteConfirmDialog,
    openClearConfirmDialog,
    getTotalCart,
    getItemsCountCart,
  } = useContext(CartContext);

  const [totalCart, setTotalCart] = useState(0);
  const [itemsCountCart, setItemsCountCart] = useState(0);

  useEffect(() => {
    setTotalCart(getTotalCart());
    setItemsCountCart(getItemsCountCart());
  }, [getItemsCountCart]);

  /** Table templates */
  const priceBodyTemplate = (rowData) => {
    return `$ ${rowData.price}`;
  };

  const subtotalBodyTemplate = (rowData) => {
    return `$ ${rowData.subtotal}`;
  };

  const imagenBodyTemplate = (rowData) => {
    return (
      <div className="text-center">
        <img
          height="100"
          src={`/articlesImg/${rowData.picture_url}`}
          alt={rowData.picture_url}
          className="product-image cart-articleImg"
        />
      </div>
    );
  };

  const actionsButtonsBodyTemplate = (rowData) => {
    return (
      <div className="text-center">
        <Button
          onClick={() => openDeleteConfirmDialog(rowData)}
          icon="pi pi-trash"
          className="p-button-sm p-button-danger"
        />
      </div>
    );
  };
  /** End Table templates */

  return (
    <>
      {!itemsCountCart ? (
        <div className="flex flex-row justify-content-center">
          <p className="text-3xl">Tu carrito está vacío</p>
        </div>
      ) : (
        <div className="row">
          <div className="col-12 mb-2 mt-2">
            <Button
              label="Limpiar carrito"
              onClick={() => openClearConfirmDialog()}
              className="p-button-lg p-button-outlined p-button-danger"
            />
          </div>

          <div className="col-12">
            <DataTable value={articlesList} responsiveLayout="scroll">
              <Column
                field="actionsButtons"
                header="Acciones"
                body={actionsButtonsBodyTemplate}
              />
              <Column field="title" header="Titulo" />
              <Column
                field="imagen"
                header="Imagen"
                body={imagenBodyTemplate}
              />
              <Column field="price" header="Precio" body={priceBodyTemplate} />
              <Column field="quantity" header="Cantidad" />
              <Column
                field="subtotal"
                header="Subtotal"
                body={subtotalBodyTemplate}
              />
            </DataTable>
          </div>

          <div className="col-12 flex justify-content-end">
            <p className="text-4xl">Total: ${totalCart}</p>
          </div>
          <div className="col-12 flex justify-content-end">
            <Button label="Finalizar compra" className="p-button-lg" />
          </div>
        </div>
      )}
    </>
  );
}
