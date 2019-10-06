import React from "react";

function Ingredient(props){
  return (
    <div className = "ingredient">
      <h3>{props.item.name}</h3>
      <input type="checkbox"/>
    </div>
  );
}

export default Ingredient;