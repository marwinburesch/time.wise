import React from "react";

export default function ItemsTotal(props) {
  const sum = props.items.reduce((acc, item) => {
    return acc + item.hours;
  }, 0);

  return (
    <section className="item total">
      <em>total</em>
      <strong>{sum} hrs</strong>
    </section>
  );
}
