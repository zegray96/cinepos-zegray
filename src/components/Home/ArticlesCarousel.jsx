import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { getArticlesHome } from "../../utils/querys";
import { Divider } from "primereact/divider";
import { Link } from "react-router-dom";
import { Skeleton } from "primereact/skeleton";

export default function ArticlesCarousel() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const skeletonTemplate = (
    <div className="mt-5 mb-5">
      <div className="row">
        <div className="col-12 md:col-6 lg:col-4">
          <Skeleton height="500px"></Skeleton>
        </div>
        <div className="sm:hidden md:block md:col-6 lg:col-4">
          <Skeleton height="500px"></Skeleton>
        </div>
        <div className="md:hidden lg:block lg:col-4">
          <Skeleton height="500px"></Skeleton>
        </div>
      </div>
    </div>
  );

  /** Carousel templates and options */
  const responsiveOptions = [
    {
      breakpoint: "1200px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "992px",
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: "768px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const articleTemplate = (article) => {
    return (
      <div className="card mr-3 ml-3">
        <div className="top">
          <Link to={`/item/${article.id}`}>
            <div className="imageDiv">
              <img className="imageBackground" src={article.image_url} />
            </div>
          </Link>
        </div>
        <div className="content">
          <div className="title monserratFont">{article.title}</div>
        </div>
        <div className="bottom">
          <div className="text-2xl font-bold monserratFont">
            $ {article.price}
          </div>
        </div>
      </div>
    );
  };
  /** End carousel options and templates */

  useEffect(() => {
    getArticlesHome()
      .then((res) => {
        setArticles(res.docs.map((item) => ({ id: item.id, ...item.data() })));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // Ocultamos el skeleton
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="container-md mt-8 ">
        <div className="mb-7">
          <Divider align="center">
            <div className="text-3xl monserratFont">Nuestros artículos</div>
          </Divider>
        </div>

        <div className={`mt-5 mb-5 ${loading ? "block" : "hidden"}`}>
          {skeletonTemplate}
        </div>

        <div className={`${!loading ? "block" : "hidden"}`}>
          <Carousel
            circular
            value={articles}
            numVisible={3}
            numScroll={3}
            responsiveOptions={responsiveOptions}
            itemTemplate={articleTemplate}
          />
          <div className="text-center mt-4">
            <Link to={`/articles`}>
              <button className="btn btn-default monserratFont">
                Ver más artículos
              </button>
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}
