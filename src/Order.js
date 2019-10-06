import React from 'react';
import "./App.css";
import Category from "./Category";
import { Link } from 'react-router-dom';

function Order(props){
  return (
    <div className = "Order">
      <Link to="/MyOrders">
        <button onClick = {()=>props.onClick(2)}>Surprise me with a taco!</button>
      </Link>
      <h2>Make your own taco</h2>
      <Category type= {props.state.shells.type} options = {props.state.shells.options} selected = {props.state.selected} handleChange = {props.handleChange}/>
      <Category type= {props.state.baseLayers.type} options = {props.state.baseLayers.options} selected = {props.state.selected} handleChange = {props.handleChange}/>
      <Category type= {props.state.mixins.type} options = {props.state.mixins.options} selected = {props.state.selected} handleChange = {props.handleChange}/>
      <Category type= {props.state.condiments.type} options = {props.state.condiments.options} selected = {props.state.selected} handleChange = {props.handleChange}/>
      <Category type= {props.state.seasonings.type} options = {props.state.seasonings.options} selected = {props.state.selected} handleChange = {props.handleChange}/>
      <div className= "bottomButton">
        <Link to="/MyOrders">
          <button onClick = {()=>props.onClick(1)}>Make my taco! </button>
        </Link>
      </div>
    </div>
  )
}

export default Order;