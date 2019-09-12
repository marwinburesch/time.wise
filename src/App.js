import React from "react";
import "./App.css";
import Title from "./components/Title";
import Items from "./components/Items";
import ItemsTotal from "./components/ItemsTotal";
import NewItem from "./components/NewItem";
import {
  setItem as setStorageItem,
  getItem as getStorageItem
} from "./api/storage";

function App() {
  const [items, setItems] = React.useState(getStorageItem("items") || []);

  function handleAdd(newItem) {
    const newItems = items.slice();
    newItems.push(newItem);
    setItems(newItems);
    setStorageItem("items", newItems);
  }

  return (
    <div className="sitewrapper">
      <header>
        <Title />
      </header>
      <main>
        <Items items={items} />
        <ItemsTotal items={items} />
      </main>
      <footer>
        <NewItem onAdd={handleAdd} />
      </footer>
    </div>
  );
}

export default App;
