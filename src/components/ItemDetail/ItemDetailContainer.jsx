import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getArticle } from "../../utils/articles";

export default function ItemDetailContainer() {
  const [article, setArticle] = useState({});

  const addToCart = (count) => {
    alert(`Se agregro ${count} items al carrito`);
  };

  useEffect(() => {
    getArticle()
      .then((res) => {
        setArticle(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ItemDetail article={article} addToCart={addToCart} />
    </>
  );
}
