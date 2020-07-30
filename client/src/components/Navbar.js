import React from 'react';
import {NavLink} from 'react-router-dom';
import Font from '../HOC/Font';
import '../css/navbar.css';


function Navbar(props){
    
    
        
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/">Tackle</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">

                    </span>
                </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/" exact>Home</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link" to="/add">Add</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link" to="/list">List</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link" to="/dead">Dead</NavLink>
                </li>
                
                </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-light my-2 my-sm-0 mr-2" type="submit">Search</button>
                    </form>

                    <button className="btn btn-light">Login</button>
                    
            </div>
            </nav>
        );
    
}

export default Font(Navbar);