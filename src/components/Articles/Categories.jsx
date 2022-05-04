import { Panel } from "primereact/panel";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div className="col-12 lg:col-3">
      <Panel header="Categorias" toggleable>
        <div className="text-lg mt-2">
          <Link
            to="/articles/category/relojes"
            className="no-underline text-800"
          >
            <i className="pi pi-chevron-right"></i> Relojes
          </Link>
        </div>

        <div className="text-lg mt-4">
          <Link
            to="/articles/category/acero-blanco"
            className="no-underline text-800"
          >
            <i className="pi pi-chevron-right"></i> Acero Blanco
          </Link>
        </div>
        <div className="text-lg mt-4">
          <Link
            to="/articles/category/acero-dorado"
            className="no-underline text-800"
          >
            <i className="pi pi-chevron-right"></i> Acero Dorado
          </Link>
        </div>
        <div className="text-lg mt-4 mb-2">
          <Link
            to="/articles/category/acero-quirurgico"
            className="no-underline text-800"
          >
            <i className="pi pi-chevron-right"></i> Acero Quirurgico
          </Link>
        </div>
      </Panel>
    </div>
  );
}
