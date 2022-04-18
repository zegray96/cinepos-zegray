import React, { useState } from "react";
import { Image } from "primereact/image";
import ItemCount from "../Item/ItemCount";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

export default function ItemDetail({ article }) {
  const [quantityCart, setQuantityCart] = useState(0);
  const [showGoCheckout, setShowGoCheckout] = useState(false);

  const addToCart = (quantity) => {
    setQuantityCart(quantityCart + quantity);
    setShowGoCheckout(true);
  };

  return (
    <>
      <div className="mt-5 mb-5">
        <div className="row articleDetail">
          <div className="image col-12 md:col-6">
            <Image
              src={`/articlesImg/${article.picture_url}`}
              alt="Image"
              width="100%"
              preview
            />
          </div>

          <div className="content col-12 md:col-6">
            <div className="title">{article.title}</div>
            <div className="price mt-2"> $ {article.price}</div>

            <div className="description mt-4">
              <Divider />
              <p>{article.description}</p>
              <Divider />
            </div>

            <div className="mt-4">
              <span className="mr-2">Categoria:</span>
              <span className="category-tag  mr-2">
                <span>{article.category.name}</span>
              </span>
            </div>


            <div className="mt-8">
              {showGoCheckout ? (
                <>
                  <Link to="/cart" className="no-underline">
                    <Button className="w-full mt-3" label="Finalizar Compra" />
                  </Link>
                  <Button
                    className="w-full mt-3"
                    label="Seguir Comprando"
                    onClick={() => setShowGoCheckout(false)}
                  />
                </>
              ) : (
                <ItemCount
                  addToCart={addToCart}
                  stock={article.stock}
                  initial={0}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
