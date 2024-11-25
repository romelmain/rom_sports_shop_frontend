import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <label className="logo">Rom Sport Shop</label>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to="#">Logout</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
