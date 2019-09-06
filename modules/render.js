import { items } from "./storage.js";
import { get } from "./selectors.js";

export function renderMain() {
  const target = get(".items");
  items.forEach(item => {
    const entry = document.createElement("div");
    entry.classList = "item";
    entry.innerHTML = `<em>${item.activity}</em>
    <strong>${item.hours} hrs</strong>`;
    target.appendChild(entry);
  });
}

export function updateTotal() {
  const target = get(".total");
  let sum = 0;
  items.forEach(item => {
    sum = sum + item.hours;
  });
  target.innerHTML = `<em>total</em>
  <strong>${sum} hrs</strong>`;
}
