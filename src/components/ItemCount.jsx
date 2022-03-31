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
      <div className="col-12 md:col-4 myPanel">
        <p>Reloj digital</p>
        <div className="p-inputgroup">
          <Button
            disabled={quantity <= 0 ? true : false}
            icon="pi pi-minus"
            className="p-button-outlined p-button-danger"
            onClick={() => removeQuantityButton()}
          />
          <InputText placeholder="Ingrese cantidad" value={quantity} />
          <Button
            disabled={quantity >= stock ? true : false}
            icon="pi pi-plus"
            className="p-button-outlined p-button-success"
            onClick={() => addQuantityButton()}
          />
        </div>

        <Button
          disabled={quantity <= 0 || quantity > stock ? true : false}
          onClick={() => addToCart(quantity)}
          label="Añadir al carrito"
          className="p-button-outlined w-full mt-3"
        />

      </div>
    </>
  );
}
