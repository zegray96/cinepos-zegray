import { Badge } from 'primereact/badge';

export default function CartWidget() {
  return (
    <div className="cartButton">
      <a href="#">
        <i
          className="pi pi-shopping-cart p-overlay-badge"
          style={{ fontSize: "2em" }}
        >
          <Badge value="2"></Badge>
        </i>
      </a>
    </div>
  );
}
