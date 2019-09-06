import { render } from "./render.js";

function setItemsToStorage(value) {
  localStorage.setItem("items", JSON.stringify(value));
}

export function getItemsFromStorage() {
  const items = localStorage.getItem("items");
  if (items) {
    return JSON.parse(items);
  }
  return null;
}

export function saveItem(activity, hours) {
  const items = getItemsFromStorage();
  let newItems;
  if (items == null) {
    newItems = [{ activity: activity, hours: parseInt(hours) }];
  } else {
    newItems = [...items, { activity: activity, hours: parseInt(hours) }];
  }
  setItemsToStorage(newItems);
  render();
}
