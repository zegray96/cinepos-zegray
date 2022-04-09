import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getArticles } from "../../utils/articles";
import { Skeleton } from "primereact/skeleton";

export default function ItemListContainer() {
  const [itemsList, setItemsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const skeletonTemplate = () => {
    return (
      <div className="mt-5 mb-5">
        <div className="row">
          <div className="col-12 sm:col-6 md:col-4">
            <Skeleton height="500px"></Skeleton>
          </div>
          <div className="col-12 sm:col-6 md:col-4">
            <Skeleton height="500px"></Skeleton>
          </div>
          <div className="col-12 sm:col-6 md:col-4">
            <Skeleton height="500px"></Skeleton>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    getArticles()
      .then((res) => {
        // Cuando la promesa devuelva los datos, los seteamos a item list
        setItemsList(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {loading ? (
        <>{skeletonTemplate()}</>
      ) : (
        <>
          <ItemList itemsList={itemsList} />
        </>
      )}
    </>
  );
}
