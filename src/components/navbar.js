import React from 'react';

const Navbar = (props) => (
    <nav>
    <h2 class="logo"><a class="logo-link" href="#">{props.title}</a></h2>
    <ul class="nav-menu">
      <li><a className="nav-menu__link" href="#">Home</a></li>
      <li><a className="nav-menu__link" href="#">Best Actors</a></li>
      <li><a className="nav-menu__link" href="#">Best Actress</a></li>
      <li><a className="nav-menu__link" href="#">Best Films</a></li>
    </ul>
  </nav>
);
export default Navbar;
