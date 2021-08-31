import React from "react";
import { ReusableComponent } from "./reusableComponent";
import graph from "./images/graph.png";

export function Visitors() {
  return (
    <div className="visitors_container">
      <ReusableComponent name="Website Visitors" value="821" />
      <div className="reusable_image">
        <img src={graph} alt="" />
      </div>
    </div>
  );
}
