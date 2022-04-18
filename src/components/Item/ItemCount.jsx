import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default function ItemCount({ addToCart, stock, initial }) {
  const [quantity, setQuantity] = useState(initial);

  const addQuantityButton = () => {
    setQuantity(quantity + 1);
  };

  const removeQuantityButton = () => {
    setQuantity(quantity - 1);
  };

  return (
    <>
      <div className="mt-4">
        <span className="mr-2">Stock Disponible:</span>
        <span className="mr-2">
          <span>{stock}</span>
        </span>

        <div className="p-inputgroup mt-2">
          <Button
            disabled={quantity <= 0}
            icon="pi pi-minus"
            className="p-button-secondary"
            onClick={() => removeQuantityButton()}
          />
          <InputText placeholder="Ingrese cantidad" value={quantity} />
          <Button
            disabled={quantity >= stock}
            icon="pi pi-plus"
            className="p-button-secondary"
            onClick={() => addQuantityButton()}
          />
        </div>
        <Button
          disabled={quantity <= 0 || quantity > stock}
          onClick={() => addToCart(quantity)}
          label="Añadir al carrito"
          className="p-button-outlined w-full mt-3"
        />
      </div>
    </>
  );
}
