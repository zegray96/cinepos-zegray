import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getArticles } from "../../utils/articles";

export default function ItemListContainer() {
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    getArticles()
      .then((res) => {
        // Cuando la promesa devuelva los datos, los seteamos a item list
        setItemsList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ItemList itemsList={itemsList} />
    </>
  );
}
