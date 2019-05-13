import React from 'react';
import'./css/style.css';
function App() {
  return (
    <div className="App">
      <nav>
        <h2 class="logo"><a class="logo-link" href="#">Oscars 2019</a></h2>
        <ul class="nav-menu">
          <li><a class="nav-menu__link" href="#">Home</a></li>
          <li><a class="nav-menu__link" href="#">Best Actors</a></li>
          <li><a class="nav-menu__link" href="#">Best Actress</a></li>
          <li><a class="nav-menu__link" href="#">Best Films</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
