import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => (
    <nav>
    <h2 class="logo"><a className="logo-link" href="#">{props.title}</a></h2>
    <ul class="nav-menu">
      <li><NavLink className="nav-menu__link" exact to="/">Home</NavLink></li>
      <li><NavLink className="nav-menu__link" to="/actors">contador</NavLink></li>
      <li><NavLink className="nav-menu__link" to="/actress">Pedido</NavLink></li>
      <li><NavLink className="nav-menu__link" to="/films">Cocina</NavLink></li>
   </ul>
  </nav>
);
export default Navbar;
