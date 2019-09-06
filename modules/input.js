// TODO: move entries here | add input function

function get(sel, target = document) {
  return target.querySelector(sel);
}

function getAll(sel, target = document) {
  return Array.from(target.querySelectorAll(sel));
}

function updateTotal() {
  const total = getFilteredEntries().reduce(
    (prev, curr) => prev + curr.hours,
    0
  );
  totalEl.innerHTML = total;
}

function resetForm() {
  topicEl.value = "";
  hoursEl.value = "";
  topicEl.focus();
}

function renderSingleEntry(entry) {
  const el = `<div class="entry">
      <em>${entry.topic}</em>
      <strong>${entry.hours}</strong>
    </div>`;
  entriesContainer.insertAdjacentHTML("beforeend", el);
}
