export default function Item({ item, removeItem, markAsBought }) {
  const { description, id, numItems, gotten } = item;
  return (
    <li>
      <input type="checkbox" value={gotten} onChange={() => markAsBought(id)} />
      {console.log(gotten)}
      <span style={gotten ? { textDecoration: "line-through" } : {}}>
        {" "}
        {numItems} {description}
      </span>
      <button onClick={() => removeItem(id)}>❌</button>
    </li>
  );
}
