import Categories from "../components/Articles/Categories";
import ItemListContainer from "../components/ItemList/ItemListContainer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { convertStringToLowerCase } from "../utils/convertString";

export default function Articles() {
  const { searchData } = useParams();

  return (
    <>
      <div className="container-md mt-5">

        {searchData && (
          <div className="row">
            <div className="col-12">
              <p className="text-lg">Resultados para "{searchData}"</p>
            </div>
          </div>
        )}

        <div className="row">
          <Categories />
          <ItemListContainer searchData={searchData} />
        </div>
      </div>
    </>
  );
}
