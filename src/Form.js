import { useState } from "react";
export default function Form({ addItems }) {
  const [numItems, setNumItems] = useState(1);
  const [description, setDescription] = useState("");
  const handleSubmit = function (e) {
    e.preventDefault();
    if (!description) return;
    const newItems = {
      description: description,
      numItems: numItems,
      gotten: false,
      id: Date.now(),
    };
    addItems(newItems);
    setDescription("");
    setNumItems(1);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What Things Do You Need To Get?</h3>
      <select value={numItems} onChange={(e) => setNumItems(e.target.value)}>
        {Array.from({ length: 100 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
