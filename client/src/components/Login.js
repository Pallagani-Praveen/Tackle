import React,{Component} from 'react';
import '../css/login.css';
import {Link} from 'react-router-dom';

class Login extends Component{
    state = {
        email:'',
        password:''
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        const options = {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(this.state)
        }
        fetch('/auth/login',options).then(res=>{
            res.json().then(data=>{
                
                if(data.user._id){
                    this.props.history.push('/');
                }
                else{
                    this.props.history.push('/login');
                }
            })
        });
    }

    handleChange = (e)=>{
        let val = e.target.getAttribute('name');
        this.setState({
            ...this.state,
            [val]:e.target.value
        });
    }
    render(){
        return(
            <div className="login-box ">
                <form onSubmit={this.handleSubmit} className="login-form text-light bg-dark">
                    <h4>Login Form</h4>
                        <label htmlFor="email">Email</label><br/>
                        <input className="form-control" type="email" name="email" placeholder="Enter Your Email" onChange={this.handleChange} required={true}/><br></br>
                        
                        <label htmlFor="password">Password</label><br/>
                        <input  className="form-control" type="password" name="password" placeholder="Enter The Password" onChange={this.handleChange} required={true}/><br></br>
                        
                        <input type="submit" value="Submit" className="mt-1 btn btn-light"/><br/> 
                        Don't have an account ? <Link to="/signup" className="bg-light btn">SignUP</Link>
                </form>
            </div>
        );
    }
}


export default Login;
