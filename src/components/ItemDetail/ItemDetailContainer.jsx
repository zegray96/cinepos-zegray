import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getArticle } from "../../utils/articles";
import { Skeleton } from "primereact/skeleton";

export default function ItemDetailContainer() {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  const addToCart = (count) => {
    alert(`Se agregro ${count} items al carrito`);
  };

  const skeletonTemplate = () => {
    return (
      <div className="mt-5 mb-5">
        <div className="row">
          <div className="col-12 md:col-6">
            <Skeleton height="505px"></Skeleton>
          </div>
          <div className="col-12 md:col-6">
            <Skeleton height="20px"></Skeleton>

            <Skeleton className="mt-5" height="20px"></Skeleton>

            <Skeleton className="mt-5" height="400px"></Skeleton>
            
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    getArticle()
      .then((res) => {
        setArticle(res);
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
          <ItemDetail article={article} addToCart={addToCart} />
        </>
      )}
    </>
  );
}
