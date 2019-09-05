import { entries } from "./modules/storage.js";

// TODO: query selector

export function renderMain() {
  console.log(entries);
  entries.forEach(item => {
    `<div class="item">
    <em>${item.activity}</em>
    <strong>${item.hours} hrs</strong>
  </div>`;
  });
}
