import React, {Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import'./css/style.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Actors from './components/actors';
import Actress from './components/actress';
import Films from './components/films'
import Counter from './components/counter';


class App extends Component {
render() {
  return (
  <BrowserRouter>
    <div className="App">
     <Navbar title="Burguer Queen"/>
	 <Route exact path="/" render={() => <Home tittle="Oscars Winnersss"/>}/>
	 <Route exact path="/actors" render={() => <Counter/>}/>
	 <Route path="/actress" render={() =><Actress/>}/>
	 <Route path="/films" render={()=> <Films />}/>
     {/*<Home title="Oscar Winners"/>*/}
    </div>
	</BrowserRouter>
  );
}
}
export default App;
