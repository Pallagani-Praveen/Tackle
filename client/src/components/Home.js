import React,{Component} from 'react';
import '../css/home.css';
import Font from '../HOC/Font';


class Home extends Component{
    render(){
        return(
            <div class="jumbotron container mt-3 border border-dark">
                <h1 class="display-4">Hello, User!</h1>
                <p class="lead">Tackle will help in tracking up of yourself.</p>
                <hr class="my-4 bg-dark"/>
                <p>Make a Todo , then make it up to the World.</p>
                <a class="btn btn-primary btn-lg" href="/list" role="button">Go To Tasks</a>
            </div>
        );
    }
}


export default Font(Home);