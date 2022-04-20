import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {
  getArticles,
  getArticlesByCategoryId,
  getCategoryBySlug,
} from "../../utils/articles";
import { Skeleton } from "primereact/skeleton";
import ErrorPage from "../ErrorPage";

export default function ItemListContainer() {
  const { categorySlug } = useParams();

  const [itemsList, setItemsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    // Limpiamos erores
    setError(null);

    if (categorySlug) {
      // Buscamos la categoria por el slug
      getCategoryBySlug(categorySlug)
        .then((res) => {
          // Mostraremos los articulos de esa categoria
          getArticlesByCategoryId(res.id)
            .then((res) => {
              setItemsList(res);
            })
            .catch((err) => {
              setError(err);
            })
            .finally(() => {
              // Ocultamos el skeleton
              setLoading(false);
            });
        })
        .catch((err) => {
          // Ocultamos el skeleton
          setLoading(false);
          // Mostramos mensaje de error
          setError(err);
        });
    } else {
      // Mostraremos todos los articulos
      getArticles()
        .then((res) => {
          setItemsList(res);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          // Ocultamos el skeleton
          setLoading(false);
        });
    }
  }, [categorySlug]);

  return (
    <>
      <div className="container-md mt-5">
        {loading && skeletonTemplate()}
        {error && <ErrorPage errorMessage={error} />}
        {!loading && !error && <ItemList itemsList={itemsList} />}
      </div>
    </>
  );
}
