export default function Stats({ items }) {
  const itemNumber = items.length;
  const gottenItems = items.filter((item) => item.gotten).length;
  const percentageGotten = Math.round((gottenItems / itemNumber) * 100);
  const numItems = itemNumber === 1 ? "item" : "items";
  const gotten =
    gottenItems === 0
      ? "You haven't gotten any item"
      : ` You've gotten ${gottenItems} (${percentageGotten})%`;
  if (itemNumber === 0) {
    return (
      <footer className="stats">
        <p>Let's Get Started By Adding Some Items 🚀</p>
      </footer>
    );
  }
  return (
    <footer className="stats">
      {percentageGotten === 100 ? (
        <em>
          All {itemNumber} {numItems} Have Been Gotten
        </em>
      ) : (
        <em>
          You Have {itemNumber} {numItems} On Your List, {gotten}
        </em>
      )}
    </footer>
  );
}
