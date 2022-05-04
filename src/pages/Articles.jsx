import Categories from "../components/Articles/Categories";
import ItemListContainer from "../components/ItemList/ItemListContainer";

export default function Articles() {

  return (
    <>
      <div className="container-md mt-5">
        <div className="row">
          <Categories />
          <ItemListContainer />
        </div>
      </div>
    </>
  );
}
