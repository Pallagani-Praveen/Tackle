import React,{Component} from 'react';

class Dead extends Component{
    state = {
        deadtodos:[],
        info_msg:'Dead Todos Loading....'
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
                        info_msg:'No Dead Todos List Found'
                    })
                }
            });
        });
    }

    timer = (finishtime) => {
        let presenttime = (new Date()).getTime();
        let lapsedtime = Math.floor((presenttime-finishtime)/1000);
        let days = Math.floor(lapsedtime/(24*60*60));
        lapsedtime = lapsedtime%(24*60*60);
        let hrs = Math.floor(lapsedtime/(60*60));
        lapsedtime = lapsedtime%(60*60);
        let mins = Math.floor(lapsedtime/60);
        return `${days} day(s) ${hrs} hrs ${mins} mins ago`;
    }

    truncatechars = (str)=>{
        if(str.length>60){
            return str.substring(0,60)+'....';
        }
        return str;
    }

    render(){
        let DeadTodoList = this.state.deadtodos.length > 0 ?(
            this.state.deadtodos.map((deadtodo,index)=>{
                return(
                    
                    <div key={index} className="alert alert-dark m-1 d-flex flex-wrap justify-content-between border border-danger p-2.5" role="alert">
                        <div>
                        <i className="fa fa-arrow-right mr-3 text-danger"></i>
                        {this.truncatechars(deadtodo.todo)}
                        </div>
                        <div className="border rounded border-danger px-1">
                            Finished : {this.timer(deadtodo.finishtime)}
                        </div>
                    </div>
                    
                    
                )
            })
        ):(this.state.info_msg);
        return(
            <div className="dead-todos container mt-4">
                <h4 className="text-center lead text-danger">List of Dead Todo's</h4>
                {DeadTodoList}
            </div>
        );
    }
}

export default Dead;
