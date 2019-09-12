// TODO: move entries here | add input function
import { get } from "./selectors.js";
import { saveItem } from "./storage.js";

export function initSubmitButton() {
  const button = get(".submitButton");
  button.addEventListener("click", addItem);
}

export function addItem() {
  const activityInput = get(".activity");
  const hoursInput = get(".hours");
  const activity = activityInput.value;
  const hours = hoursInput.value;
  activity && hours > 0 && saveItem(activity, hours);
}
