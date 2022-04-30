import relojes from "../img/categories/relojes.jpg";
import aceroBlanco from "../img/categories/aceroBlanco.jpg";
import aceroDorado from "../img/categories/aceroDorado.jpg";
import aceroQuirurgico from "../img/categories/aceroQuirurgico.jpg";

import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="heroImage">
        <div>
          <div className="title">¡Bienvenidos a Olimpia!</div>
          <div className="text">
            Encontra gran variedad de joyas y accesorios en nuestra tienda
          </div>
        </div>
      </div>

      <div className="container-md mt-8">

        <div className="row">
          <div className="col-12 sm:col-6 md:col-3">
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

          <div className="col-12 sm:col-6 md:col-3">
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

          <div className="col-12 sm:col-6 md:col-3">
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

          <div className="col-12 sm:col-6 md:col-3">
            <Link to="/category/acero-quirurgico">
              <div className="categoryCard">
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
    </>
  );
}
