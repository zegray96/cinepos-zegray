import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getArticle } from "../../utils/articles";

export default function ItemDetailContainer() {
  const [article, setArticle] = useState({});

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
      <ItemDetail article={article} />
    </>
  );
}
