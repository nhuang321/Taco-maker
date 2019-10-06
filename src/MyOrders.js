import React from 'react';
import "./App.css";
import Taco from "./Taco";
import { Link } from 'react-router-dom';

function MyOrders(props){
  if (props.made.length == 0){
    return (
      <div className = "MyOrders">
        <h2>No orders yet</h2>
        <Link to="/">
          <button >Order a taco</button>
        </Link>
      </div>
    )
  }
  else{
    const tacos = props.made.map((taco)=>
      <Taco className = "Taco" ingredients = {taco.taco} orderNumber ={taco.orderNumber} onClick = {props.onClick}/>)
    return(
      <div className = "MyOrders">
        {tacos}
        <Link to="/">
          <button className= "bottomButton">Order another taco</button>
        </Link>
      </div>
    )
  }
}

export default MyOrders;