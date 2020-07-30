import React,{Component} from 'react';
import '../css/list.css';
import '../css/loader.css';
import Font from '../HOC/Font';
import {Helmet} from 'react-helmet';


class List extends Component{
    state = {
        todos:''
    }

    componentDidMount(){
        fetch('/getTodos').then(res=>{
            res.json().then(data=>{
            
                this.setState({
                    todos:Array.from(data.todos)
                })
            });
        });

    }

    timer = (time)=>{
        let present_time = new Date();
        let start_time = new Date(time);
        let total_time = 24*60*60;
        let deadlimit = total_time/5;

        let time_in_secs = (present_time - start_time)/1000;

        let color = 'success';
        if(total_time-time_in_secs<=deadlimit){
            color = 'danger';
        }
        time_in_secs =  24*60*60 - time_in_secs ;

        let hrs = Math.floor(time_in_secs/3600)
        time_in_secs = time_in_secs % 3600;

        let mins = Math.floor(time_in_secs/60);
        return {val:`${hrs} hrs , ${mins} mins`,color:color};
    }

    truncatechars = (str)=>{
        if(str.length>60){
            return str.substring(0,60)+'....';
        }
        return str;
    }
    
   
    
    
    render(){
        
        let list = this.state.todos.length>0?(
            this.state.todos.map((todo,index)=>{
                let {val,color} = this.timer(todo.time);
                let stamp = <i className="fa fa-circle text-success mr-2" aria-hidden="true"></i>;
                if(color==='danger'){
                    stamp = <i className="fa fa-circle text-danger mr-2" aria-hidden="true"></i>
                }
                
                return (
                    <li key={index} className="list-item" >
                        <Helmet>
                            <title>
                                Todo List
                            </title>
                        </Helmet>
                        <div className="alert alert-dark d-flex flex-wrap  justify-content-between  m-1" role="alert">
                            <div className="text ">
                                <i className="fa fa-arrow-right mr-2" aria-hidden="true"></i>
                                {this.truncatechars(todo.todo)}
                            </div>

                            <div id={index} className="border border-dark text-dark px-2 rounded">
                                Time Remaining : {stamp}{val}
                            </div>
                        </div>
                    </li>
                )
            })
            ):(<div className="outer-loader">
                <div className="loader"></div>
            </div>
            );

        return(
            <div className="list container mt-3 ">
                <h4 className="text-center">List of Todo's</h4>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}

export default Font(List);