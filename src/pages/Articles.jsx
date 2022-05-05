import Categories from "../components/Articles/Categories";
import ItemListContainer from "../components/ItemList/ItemListContainer";
import { useParams } from "react-router-dom";

export default function Articles() {
  const { searchData } = useParams();
  const { categorySlug } = useParams();

  return (
    <>
      <div className="container-md mt-5">
        {searchData && (
          <div className="row">
            <div className="col-12">
              <p className="text-lg">Resultados para <strong>"{searchData}"</strong></p>
            </div>
          </div>
        )}

        {categorySlug && (
          <div className="row">
            <div className="col-12">
              <p className="text-lg">Viendo Categoria <strong>"{categorySlug}"</strong></p>
            </div>
          </div>
        )}

        <div className="row">
          <Categories />
          <ItemListContainer
            searchData={searchData}
            categorySlug={categorySlug}
          />
        </div>
      </div>
    </>
  );
}
