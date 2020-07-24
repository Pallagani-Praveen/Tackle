import React,{Component} from 'react';
import LoginFirst from '../components/LoginAlert';

class Home extends Component{
    
    componentDidMount(){
        fetch('/getUser').then(res=>{
            res.json().then(data=>{
                let isAuth = false;
                let user = null;
                if(data.user){
                    isAuth=true;
                    user=data.user;
                }
                const state = {
                    isAuth:isAuth,
                    user:user
                }
                this.props.login(state);
            });
        });
    }

    render(){
        const content = this.props.state.isAuth ? ('Welcome '+this.props.state.user.username):<LoginFirst/>;
        return(
            <div className="home">
                {content}
            </div>
        );
    }
}


export default Home;