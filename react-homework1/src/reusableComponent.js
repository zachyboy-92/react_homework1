import React from "react";

export function ReusableComponent(props) {
  return (
    <div className="reusable_data">
      <ul>
        <h2>{props.name}</h2>
        <li>{props.value}</li>
        <li>{props.value2}</li>
        <li>{props.value3}</li>
      </ul>
    </div>
  );
}
