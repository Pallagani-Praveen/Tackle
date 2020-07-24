import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../css/login.css';

class Signup extends Component {
    state = {
        username:'',
        email:'',
        password:''
    }
    
    handleChange = (e)=>{
        this.setState({
            ...this.state,
            [e.target.name] : e.target.value
        });
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        const options = {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(this.state)
        }
        console.log(this.state);
        fetch('/auth/signup',options).then(res=>{
            res.json().then(data=>{
                if(data.message){
                   this.props.history.push('/login');
                }
                else{
                    this.props.history.push('/signup');
                }
            });
        }); 
    }

    render(){
        
        return(
            <div className="login-box ">
                <form onSubmit={this.handleSubmit} className="login-form text-light bg-dark">
                    <h4>SignUp Form</h4>
                        <label htmlFor="username">UserName</label>
                        <input className="form-control" type="text" name="username" placeholder="Enter The UserName" onChange={this.handleChange}/>
                        <label htmlFor="email">Email</label><br/>
                        <input className="form-control" type="email" name="email" placeholder="Enter Your Email" onChange={this.handleChange} required={true}/><br></br>
                        
                        <label htmlFor="password">Password</label><br/>
                        <input  className="form-control" type="password" name="password" placeholder="Enter The Password" onChange={this.handleChange} required={true}/><br></br>
                        
                        <input type="submit" value="Submit" className="mt-1 btn btn-light"/><br/> 
                        Already have an account ? <Link to="/login" className="bg-light btn">Login</Link>
                </form>
            </div>
        );
    }
}


export default Signup;