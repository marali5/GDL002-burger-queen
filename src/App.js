import React from 'react';
import'./css/style.css';
import Navbar from './components/navbar';
import Home from './components/home';
function App() {
  return (
    <div className="App">
     <Navbar title="The oscar 2019"/>
     <Home title="Oscar Winers"/>
    </div>
  );
}

export default App;
