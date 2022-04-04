import Item from "../Item/Item";

export default function ItemList({ itemsList }) {
  return (
    <>
      <div className="flex justify-content-center grid">
        {itemsList.map((item) => (
          <Item key={item.id} itemInfo={item} />
        ))}
      </div>
    </>
  );
}
