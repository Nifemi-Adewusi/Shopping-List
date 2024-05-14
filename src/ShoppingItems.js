import { useState } from "react";
import Item from "./Item";
export default function ShoppingItems({
  items,
  removeItem,
  markAsBought,
  clearShoppingList,
}) {
  const [sortedBy, setSortedBy] = useState("input");
  let sortedItems;
  if (sortedBy === "input") sortedItems = items;
  if (sortedBy === "gotten") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(b.gotten) - Number(a.gotten));
  }
  if (sortedBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            removeItem={removeItem}
            markAsBought={markAsBought}
          ></Item>
        ))}
      </ul>

      {items.length !== 0 ? (
        <div>
          <select
            value={sortedBy}
            onChange={(e) => setSortedBy(e.target.value)}
          >
            <option value="input">Sort Based On Order Of Input</option>
            <option value="gotten">Sort Based On Items Gotten</option>
            <option value="description">Sort Based On Item Description</option>
          </select>
          <button onClick={clearShoppingList}>Clear Cart</button>
        </div>
      ) : null}
    </div>
  );
}
