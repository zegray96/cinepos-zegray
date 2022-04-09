import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getArticles, getArticlesByCategoryId } from "../../utils/articles";
import { Skeleton } from "primereact/skeleton";

export default function ItemListContainer() {
  const { categoryName } = useParams();

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
    // Mostramos el skeleton
    setLoading(true);

    if (categoryName) {
      let categoryId = null;
      if (categoryName == "relojes") {
        categoryId = 1;
      }
      if (categoryName == "acero-blanco") {
        categoryId = 2;
      }
      if (categoryName == "acero-dorado") {
        categoryId = 3;
      }
      if (categoryName == "acero-quirurgico") {
        categoryId = 4;
      }
      
      if (categoryId) {
        // Mostraremos los articulos de esa categoria
        getArticlesByCategoryId(categoryId)
          .then((res) => {
            setItemsList(res);
            // Ocultamos el skeleton
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      // Mostraremos todos los articulos
      getArticles()
        .then((res) => {
          setItemsList(res);
          // Ocultamos el skeleton
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [categoryName]);

  return (
    <>
      <div className="container-md mt-5">
        {loading ? (
          <>{skeletonTemplate()}</>
        ) : (
          <>
            <ItemList itemsList={itemsList} />
          </>
        )}
      </div>
    </>
  );
}
