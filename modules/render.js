import { items } from "./storage.js";
import { get } from "./selectors.js";

// TODO: query selector

export function renderMain() {
  console.log(items);
  const entries = get("#entries");
  console.log(entries);
  items.forEach(item => {
    let entry = `<div class="item">
    <em>${item.activity}</em>
    <strong>${item.hours} hrs</strong>
  </div>`;
    console.log(entry);
    entries.appendChild(entry);
  });
}

// function renderSingleEntry(entry) {
//   const el = `<div class="entry">
//   <em>${entry.topic}</em>
//   <strong>${entry.hours}</strong>
//   </div>`;
//   entriesContainer.insertAdjacentHTML("beforeend", el);
// }
