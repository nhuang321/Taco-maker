import React from 'react';
import "./App.css";

function Category(props){
  const optionComponents = props.options.map(option =>
    <div className ="ingredientComponent">
      <input type="radio" name= {props.type} onChange = {()=>props.handleChange(option, props.selected, props.type)}/>  {option.name}
    </div>
  )
  return (
    <div>
      <h3>Select your {props.type}</h3>
      {optionComponents}
    </div>
  )
}

export default Category;