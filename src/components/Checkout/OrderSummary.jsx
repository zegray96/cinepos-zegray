import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Divider } from "primereact/divider";
import { convertStringToPascalCase } from "../../utils/convertString";


export default function OrderSummary() {
  const { articlesCart } = useContext(CartContext);
  const { totalCart } = useContext(CartContext);

  return (
    <div className="card p-4">
      <p className="text-2xl m-0">Mi pedido</p>
      <div className="mt-5">
        {articlesCart.map((article) => (
          <div key={article.id}>
            <div className="flex justify-content-between">
              <div>{convertStringToPascalCase(article.title)}</div>
              <div className="font-bold">${article.price}</div>
            </div>
            <Divider />
          </div>
        ))}
      </div>

      <div className="text-2xl mt-5 text-right">
        Total <span className="font-bold">${totalCart}</span>
      </div>
    </div>
  );
}
