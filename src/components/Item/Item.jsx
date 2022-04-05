import { Card } from "primereact/card";
import { Button } from "primereact/button";

export default function Item({ itemInfo }) {
  const header = (
    <img
      alt="Card"
      src={require(`../../utils/articlesImg/${itemInfo.pictureUrl}`)}
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );

  const footer = (
    <span>
      <Button label="Ver Mas" icon="pi pi-eye" />
    </span>
  );

  return (
    <>
      <div className="col-12 sm:col-6 md:col-4">
        <div className="card">
          <div className="top">
            <div
              className="image"
              style={{
                backgroundImage: `url(${require(`../../utils/articlesImg/${itemInfo.pictureUrl}`)})`,
              }}
            ></div>
          </div>

          <div className="content">
            <div className="title">{itemInfo.title}</div>
            <div className="price">$ {itemInfo.price}</div>
          </div>
          <div className="bottom">
            <Button label="Ver Más" className="p-button-outlined p-button-info" />
          </div>
        </div>
      </div>
    </>
  );
}
