import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import articles from "../../utils/articles";

export default function ItemListContainer() {
  const [itemsList, setItemsList] = useState();

  useEffect(() => {
    const getItems = new Promise((resolve, reject) => {
      resolve(articles);
    });

    getItems
      .then((res) => {
        console.log(res);
        // Cuando la promesa devuelva los datos, los seteamos a item list
        setItemsList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <>{itemsList ? <ItemList itemsList={itemsList} /> : <></>}</>;
}
