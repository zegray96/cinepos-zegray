import React, { useState, useEffect } from "react";
import { Image } from "primereact/image";
import ItemCount from "../Item/ItemCount";
import { Divider } from "primereact/divider";
import { Tag } from "primereact/tag";

export default function ItemDetail({ article, addToCart }) {
  return (
    <>
      <div className="mt-5 mb-5">
        <div className="row articleDetail">
          <div className="image col-12 md:col-6">
            <Image
              src={`/articlesImg/${article.picture_url}`}
              alt="Image"
              width="100%"
              preview
            />
          </div>

          <div className="content col-12 md:col-6">
            <div className="title">{article.title}</div>
            <div className="price mt-2"> $ {article.price}</div>

            <div className="description mt-4">
              <Divider />
              <p>{article.description}</p>
              <Divider />
            </div>

            <div className="mt-4">
              <span className="mr-2">Categoria:</span>
              <span className="category-tag  mr-2">
                <span>{article.category.name}</span>
              </span>
            </div>

            <div className="mt-8">
              <ItemCount
                addToCart={addToCart}
                stock={article.stock}
                initial={0}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
