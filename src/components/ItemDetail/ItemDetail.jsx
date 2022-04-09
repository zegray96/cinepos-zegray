import React, { useState, useEffect } from "react";
import { Image } from "primereact/image";
import ItemCount from "../Item/ItemCount";

export default function ItemDetail({ article, addToCart }) {
  return (
    <>
      <div className="mt-5 mb-5">
        <div className="row articleDetail">
          <div
            className="image col-12 sm:col-6"
            style={{
              backgroundImage: `url(articlesImg/${article.picture_url})`,
            }}
          ></div>

          <div className="content col-12 sm:col-6">
            <div className="title">{article.title}</div>
            <div className="price mt-2"> $ {article.price}</div>
            <div className="description mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              praesentium tempore cumque, corrupti minima harum sequi omnis hic
              aspernatur eum tempora distinctio assumenda reiciendis esse
              temporibus porro laboriosam doloribus consectetur.
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
