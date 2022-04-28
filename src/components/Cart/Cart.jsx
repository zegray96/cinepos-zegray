import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Link } from "react-router-dom";

export default function Cart({ articlesList }) {
  const { removeItem, clear, countCart, totalCart } = useContext(CartContext);

  const openClearConfirmDialog = () => {
    confirmDialog({
      message: "Esta seguro de eliminar todos los articulos del carrito?",
      header: "Mensaje de confirmación",
      icon: "pi pi-info-circle",
      acceptClassName: "p-button-outlined p-button-danger",
      rejectClassName: "p-button-outlined p-button-primary",
      acceptLabel: "Si",
      accept: () => clear(),
    });
  };

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
          src={rowData.image_url}
          alt={rowData.image_url}
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
      <ConfirmDialog />
      {!countCart ? (
        <div className="flex flex-column justify-content-center align-items-center">
          <p className="text-3xl">Tu carrito está vacío</p>
          <Link to="/" className="no-underline">
            <Button label="Ver articulos" className="p-button-lg" />
          </Link>
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
            <Link to="/checkout" className="no-underline">
              <Button label="Finalizar compra" className="p-button-lg" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
