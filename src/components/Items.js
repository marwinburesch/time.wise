import React from "react";
import Item from "./Item";

export default function Items(props) {
  return (
    <section className="items">
      {props.items.map(item => {
        return <Item key={item.activity} item={item} />;
      })}
    </section>
  );
}
