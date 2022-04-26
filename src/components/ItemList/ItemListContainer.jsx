import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { Skeleton } from "primereact/skeleton";
import ErrorPage from "../ErrorPage";
import {
  getArticles,
  getArticlesByCategorySlug,
} from "../../utils/querys";

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
      // Mostraremos los articulos de esa categoria
      getArticlesByCategorySlug(categorySlug)
        .then((res) => {
          if (res.size === 0) {
            setError("No se encontraron resultados");
          } else {
            // mapeamos los resultados
            setItemsList(
              res.docs.map((item) => ({ id: item.id, ...item.data() }))
            );
          }
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          // Ocultamos el skeleton
          setLoading(false);
        });
    } else {
      // Mostraremos todos los articulos
      getArticles()
        .then((res) => {
          if (res.size === 0) {
            setError("No se encontraron resultados");
          } else {
            // mapeamos los resultados
            setItemsList(
              res.docs.map((item) => ({ id: item.id, ...item.data() }))
            );
          }
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
