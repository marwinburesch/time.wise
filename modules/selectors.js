export function get(sel, target = document) {
  return target.querySelector(sel);
}

export function getAll(sel, target = document) {
  return Array.from(target.querySelectorAll(sel));
}
