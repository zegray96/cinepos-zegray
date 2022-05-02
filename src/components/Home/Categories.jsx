import relojes from "../../img/categories/relojes.jpg";
import aceroBlanco from "../../img/categories/aceroBlanco.jpg";
import aceroDorado from "../../img/categories/aceroDorado.jpg";
import aceroQuirurgico from "../../img/categories/aceroQuirurgico.jpg";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div className="container-md mt-8">
      <div className="gridCategories">
        <div className="catRelojes">
          <Link to="/category/relojes">
            <div className="categoryCard">
              <div className="imageDiv">
                <img className="imageBackground" src={relojes} />
                <div className="content text-center">
                  <div className="title">Relojes</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="catAceroBlanco">
          <Link to="/category/acero-blanco">
            <div className="categoryCard">
              <div className="imageDiv">
                <img className="imageBackground" src={aceroBlanco} />
                <div className="content text-center">
                  <div className="title">Acero Blanco</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="catAceroDorado">
          <Link to="/category/acero-dorado">
            <div className="categoryCard">
              <div className="imageDiv">
                <img className="imageBackground" src={aceroDorado} />
                <div className="content text-center">
                  <div className="title">Acero Dorado</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="catAceroQuirurgico">
          <Link to="/category/acero-quirurgico">
            <div className="categoryCard" style={{ paddingTop: "260px" }}>
              <div className="imageDiv">
                <img className="imageBackground" src={aceroQuirurgico} />
                <div className="content text-center">
                  <div className="title">Acero Quirurgico</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
