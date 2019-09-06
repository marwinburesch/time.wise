export function get(sel) {
  return document.querySelector(sel);
}

export function getAll(sel, target = document) {
  return Array.from(target.querySelectorAll(sel));
}
