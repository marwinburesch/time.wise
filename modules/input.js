// TODO: move entries here | add input function
import { get } from "./selectors.js";

function resetForm() {
  topicEl.value = "";
  hoursEl.value = "";
  topicEl.focus();
}

function updateTotal() {
  const total = getFilteredEntries().reduce(
    (prev, curr) => prev + curr.hours,
    0
  );
  totalEl.innerHTML = total;
}
