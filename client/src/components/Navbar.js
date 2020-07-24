import React from 'react';
import {Link,withRouter,useHistory} from 'react-router-dom';
import '../css/navbar.css';


function Navbar({state,logout}){
    
    
        const history = useHistory();
        const handleLogin = (e)=>{
            history.push('/login');
        }

        const handleLogOut = (e)=>{
            fetch('/logout').then(res=>{
                res.json().then(data=>{
                    history.push(data.path);
                });
            });
        }

        const authBtn = state.isAuth ? (
            <button className="btn btn-light" onClick={handleLogOut}>LogOut</button>
        ):(
            <button className="btn btn-light" onClick={handleLogin}>Login</button>
        );

        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Tackle</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">

                    </span>
                </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/" >Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                
                
                </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-light my-2 my-sm-0 mr-2" type="submit">Search</button>
                    </form>

                    {authBtn}
                    
            </div>
            </nav>
        );
    
}

export default withRouter(Navbar);