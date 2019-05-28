import React, {Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import'./css/style.css';
import Navbar from './components/navbar';
import Ordenar from './components/ordenar';
import Cocina from './components/cocina'



class App extends Component {
render() {
  return (
  <BrowserRouter>
    <div className="App">
     <Navbar title="Burguer Queen"/>

	 <Route path="/ordenar" render={() =><Ordenar/>}/>
	 <Route path="/cocina" render={()=> <Cocina />}/>
    
    </div>
	</BrowserRouter>
  );
}
}
export default App;
