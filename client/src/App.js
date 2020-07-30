import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
// import Login from './components/Login';
// import Signup from './components/Signup';
import Home from './components/Home';
import Form from './components/Form';
import Contact from './components/Contact';
import List from './components/List';
import Dead from './components/Dead';



class App extends Component {
    state = {
      isAuth:false,
      user:null
    }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route path="/" exact component={Home}/>  
          <Route path="/contact" component={Contact}/>
          <Route path="/add" component={Form}/>
          <Route path="/list" component={List}/>
          <Route path="/dead" component={Dead}/>
        </div>
      </Router>
    );
  }
}

export default App;
