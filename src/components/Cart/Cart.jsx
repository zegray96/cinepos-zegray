import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function Cart({ articlesList }) {
  const { removeItem, clear, getTotalCart } = useContext(CartContext);

  /** Table templates */
  const priceTemplate = (rowData) => {
    return `$ ${rowData.price}`;
  };

  const subtotalTemplate = (rowData) => {
    return `$ ${rowData.subtotal}`;
  };

  const actionsButtonsTemplate = (rowData) => {
    return (
      <Button
        onClick={() => removeItem(rowData)}
        icon="pi pi-trash"
        className="p-button-sm p-button-danger"
      />
    );
  };
  /** End Table templates */

  return (
    <>
      <div className="mb-2 mt-2">
        <h3>Total: ${getTotalCart()}</h3>
      </div>

      <div className="mb-2 mt-2">
        <Button
          label="Limpiar"
          onClick={() => clear()}
          className="p-button-sm p-button-danger"
        />
      </div>

      <DataTable
        value={articlesList}
        responsiveLayout="scroll"
        emptyMessage="Carrito vacio."
      >
        <Column field="title" header="Titulo" />
        <Column field="price" header="Precio" body={priceTemplate} />
        <Column field="quantity" header="Cantidad" />
        <Column field="subtotal" header="Subtotal" body={subtotalTemplate} />
        <Column
          field="actionsButtons"
          header="Acciones"
          body={actionsButtonsTemplate}
        />
      </DataTable>
    </>
  );
}
