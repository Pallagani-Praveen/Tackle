import React,{Component} from 'react';
import '../css/home.css';
import Font from '../HOC/Font';


class Home extends Component{
    render(){
        return(
            <div className="jumbotron container mt-3 border border-dark">
                <h1 className="display-4">Hello, User!</h1>
                <p className="lead">Tackle will help in tracking up of yourself.</p>
                <hr className="my-4 bg-dark"/>
                <p>Make a Todo , then make it up to the World.</p>
                <a className="btn btn-primary btn-lg" href="/list" role="button">Go To Tasks</a>
            </div>
        );
    }
}


export default Font(Home);