import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css";

function Navbar(){
  return( 
      <nav className = "navbar">
        <Link to="/" className = "order">Order</Link>
        <ul className = "right">
          <li><Link to= "/MyOrders">MyOrders</Link></li>
        </ul>
      </nav>
  )
}

export default Navbar;