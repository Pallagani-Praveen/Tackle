import React,{Component} from 'react';
import '../css/form.css';
import Font from '../HOC/Font';
import {Helmet} from 'react-helmet';

class Form extends Component{
    state = {
        todo:''
    }

    

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    handleSubmit = (e)=>{
        e.preventDefault();

        document.getElementById('info').innerHTML = 'Pushing data...';
        
        const options = {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(this.state)
        }

        fetch('/addTodo',options).then(res=>{
            res.json().then(data=>{
                
                this.setState({
                    todo:''
                },()=>{
                    document.getElementById('info').innerHTML = `<span class="text-success lead small">Data Pushed Successfully</span>`;
                });
            });
        });
    }
    render(){
        return(
            <div className="form-div rounded">
                <Helmet>
                    <title>Add Todo</title>
                </Helmet>
                <h4 className="bg-dark text-light p-3 rounded">Add Task</h4>
                <hr/>
                <form className="form" onSubmit={this.handleSubmit} id="form">
                    <label htmlFor="todo" className="lead w-100"><span className='float-left'>Todo : <span className="p-2" id="info"></span></span> <span className="float-right small">Task Time : 24 hrs</span></label>
                    <input className="form-control" name="todo" placeholder="Enter Your Task" type='text' autoComplete="off" value={this.state.todo} onChange={this.handleChange} required={true}/>
                    <input type="submit" value="Submit" className="btn btn-dark mt-3"/>
                </form>
            </div>
        );
    }
}

export default Font(Form);