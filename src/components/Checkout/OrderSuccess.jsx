import { Button } from "primereact/button";


export default function OrderSuccess({orderId}) {
  return (
    <div className="col-12  text-center">
      <p className="text-2xl m-0">Pedido generado exitosamente!</p>
      <p>
        Su N° de pedido es: <strong>{orderId}</strong>
      </p>
      <p>Guardelo para ver el seguimiento de su pedido</p>
      <Button label="Seguimiento de pedido" className="p-button-info mt-4" />
    </div>
  );
}
