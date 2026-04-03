import { useState, useMemo, useCallback } from 'react';

const items = [
  "Apples",
  "Bananas",
  "Strawberries",
  "Blueberries",
  "Mangoes",
  "Pineapple",
  "Lettuce",
  "Broccoli",
  "Paper Towels",
  "Dish Soap",
];

let prevToggleItem = null;

export const ShoppingList = () => {
  const [query, setQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  const filteredItems = useMemo(() => {
    console.log("Filtering items...");
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query]);

  const toggleItem = useCallback(
    (item) => {
      setSelectedItems((prev) =>
        prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
      );
    },
    [setSelectedItems],//Podria dejar el array de dependencias vacio, ya que setSelectedItems es una funcion estable que no cambia entre renders. Sin embargo, incluirla en el array de dependencias es una buena practica para asegurarse de que toggleItem se actualice correctamente si setSelectedItems llegara a cambiar en el futuro.
  );

  if (prevToggleItem !== toggleItem) {
    console.log("New toggleItem function");
    prevToggleItem = toggleItem;
  } else {
    console.log("Current toggleItem function");
  }

  return (
    <div className="container">
      <h1>Shopping List</h1>
      <form>
        <label htmlFor="search">Search for an item:</label>
        <input
          id="search"
          type="search"
          placeholder="Search..."
          aria-describedby="search-description"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <p id="search-description">Type to filter the list below:</p>
        <ul>
          {filteredItems.map((item) => {
            const isChecked = selectedItems.includes(item);
            return (
              <li
                key={item}
                style={{ textDecoration: isChecked ? "line-through" : "none" }}
              >
                <label>
                  <input
                    type="checkbox"
                    onChange={() => toggleItem(item)}
                    checked={isChecked}
                  />
                  {item}
                </label>
              </li>
            );
          })}
        </ul>
      </form>
    </div>
  );
};
