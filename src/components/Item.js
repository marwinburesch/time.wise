import React from "react";

export default function Item(props) {
  return (
    <div className="item">
      <em>{props.item.activity}</em>
      <strong>{props.item.hours} hrs</strong>
    </div>
  );
}
