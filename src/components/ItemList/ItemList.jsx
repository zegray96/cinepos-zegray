import React, {useEffect} from "react";
import Item from "../Item/Item";

export default function ItemList({ itemsList }) {
  
  return (
    <>
      <div className="row justify-content-between align-items-stretch">
        {itemsList.map((item) => (
          <Item key={item.id} itemInfo={item} />
        ))}
      </div>
    </>
  );
}
