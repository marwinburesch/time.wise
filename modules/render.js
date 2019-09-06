import { getItemsFromStorage } from "./storage.js";
import { get } from "./selectors.js";

export function render() {
  const items = getItemsFromStorage();
  const target = get(".items");
  target.innerHTML = "";
  items &&
    items.forEach(item => {
      const entry = document.createElement("div");
      entry.classList = "item";
      entry.innerHTML = `<em>${item.activity}</em>
    <strong>${item.hours} hrs</strong>`;
      target.appendChild(entry);
    });
  updateTotal();
}

function updateTotal() {
  const items = getItemsFromStorage();
  const target = get(".total");
  let sum = 0;
  items &&
    items.forEach(item => {
      sum = sum + item.hours;
    });
  target.innerHTML = `<em>total</em>
  <strong>${sum} hrs</strong>`;
}
