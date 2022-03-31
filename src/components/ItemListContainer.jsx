import ItemCount from "./ItemCount";

export default function ItemListContainer({ greeting }) {
  const stock = 5;
  const initial = 0;

  const addToCart = (quantityAdd) => {
    console.log(`Se añadiaron ${quantityAdd} items al carrito`);
  };

  return (
    <>
      <div className="flex justify-content-center">
        <h1>{greeting}</h1>
      </div>

      <div className="grid flex justify-content-center">
        <ItemCount addToCart={addToCart} stock={stock} initial={initial} />
      </div>
    </>
  );
}
