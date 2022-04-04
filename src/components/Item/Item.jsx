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
      <div className="col-12 sm:col-4">
        <Card
          className="h-full"
          title={itemInfo.title}
          subTitle={`$ ${itemInfo.price}`}
          footer={footer}
          header={header}
        ></Card>
      </div>
    </>
  );
}
