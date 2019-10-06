import React from 'react';
import "./App.css";

function Taco(props){
  let all = {
    shell: "no",
    baseLayer: "no",
    mixin: "no",
    condiment: "no",
    seasoning: "no"
  };
  let i;
  let items;
  let categories = ["shell", "baseLayer", "mixin", "condiment", "seasoning"];
  for (i = 0; i < categories.length; i++){
    items = props.ingredients.filter(function(value, index, arr){
      return value.type == categories[i];
    })
    if (items.length!= 0){
      all[categories[i]] = items[0].ingredient.name;
    }
  }

  return (
    <div>
      <h2>Order #{props.orderNumber}</h2>
      <p>Delicious, freshly made taco with {all.shell} shell, {all.baseLayer} baseLayer, {all.mixin} mixin, {all.condiment} condiment, 
      and {all.seasoning} seasoning.</p>
      <button className = "eatButton" onClick = {()=>props.onClick(3, props.orderNumber)}>Eat this order</button>
    </div>
    )
}

export default Taco;