import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';



class App extends Component {
    state = {
      isAuth:false,
      user:null
    }

    // componentDidUpdate(){
    //   fetch('/getUser').then(res=>{
    //     res.json().then(data=>{
    //       console.log(data);
    //       if(data.user){
    //         this.setState({
    //           isAuth:true,
    //           user:data.user
    //         });
    //       }
          
    //     })
    //   });
    // }

    
    componentDidMount(){
      fetch('/getUser').then(res=>{
        res.json().then(data=>{
          console.log(data);
          if(data.user){
            this.setState({
              isAuth:true,
              user:data.user
            });
          }
          
        })
      });
    }


    login = (state)=>{
      this.setState({
        isAuth:state.isAuth,
        user:state.user
      });
    }

    

    

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar state={this.state}/>
          <Route path="/" exact component={()=>{
            return(
              <Home state={this.state} login={this.login}/>
            );
          }}/>  
          <Route path={"/login"} component={Login}/>
          <Route path="/signup" component={Signup}/>
        </div>
      </Router>
    );
  }
}

export default App;
