// TODO: move entries to input | implement localStorage

export let items = [
  {
    activity: "cooking",
    hours: 2
  },

  {
    activity: "sleep",
    hours: 7
  },
  {
    activity: "javascript",
    hours: 3
  },
  {
    activity: "dancing",
    hours: 4
  }
];

export function addItem(activity, hours) {
  items = [...items, { activity: activity, hours: hours }];
}
