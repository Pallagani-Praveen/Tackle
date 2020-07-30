import React,{Component} from 'react';

class Dead extends Component{
    state = {
        deadtodos:[],
        err_msg:'Dead Todos Loading....'
    }
    componentDidMount(){
        fetch('getDeadTodos').then(res=>{
            res.json().then(data=>{
                if(data.deadtodos){
                    this.setState({
                        ...this.state,
                        deadtodos:Array.from(data.deadtodos)
                    })
                }
                else{
                    this.setState({
                        ...this.state,
                        err_msg:'No Dead Todos List Found'
                    })
                }
            });
        });
    }
    render(){
        let DeadTodoList = this.state.deadtodos.length > 0 ?(
            this.state.deadtodos.map(deadtodo=>{
                return(
                    <div className="alert alert-dark" role="alert">
                        <i className="fa fa-arrow-right mr-3"></i>{deadtodo.todo}
                    </div>
                )
            })
        ):(this.state.err_msg);
        return(
            <div className="dead-todos container mt-4">
                {DeadTodoList}
            </div>
        );
    }
}

export default Dead;
