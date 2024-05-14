import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import ShoppingItems from "./ShoppingItems";
import Stats from "./Stats";
const shoppingItems = [
  {
    quantity: 4,
    description: "Eggs",
    gotten: false,
    id: 1,
  },
  {
    quantity: 8,
    description: "Sugar",
    gotten: false,
    id: 2,
  },
  {
    quantity: 3,
    description: "Rice",
    gotten: false,
    id: 3,
  },
];
export default function App() {
  const [items, setItems] = useState(shoppingItems);
  const addItems = function (item) {
    setItems((currentItems) => [...currentItems, item]);
  };
  const removeItem = function (id) {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };
  const markAsBought = function (id) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, gotten: !item.gotten } : item
      )
    );
  };
  const clearShoppingList = function () {
    const confirm = window.confirm(
      "Are You Sure You Want To Clear The Shopping Cart?"
    );
    if (confirm) {
      setItems([]);
    }
  };
  return (
    <div className="app">
      <Logo />
      <Form addItems={addItems} />
      <ShoppingItems
        items={items}
        removeItem={removeItem}
        markAsBought={markAsBought}
        clearShoppingList={clearShoppingList}
      />
      <Stats items={items} />
    </div>
  );
}
