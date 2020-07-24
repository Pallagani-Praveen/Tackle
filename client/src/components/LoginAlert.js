import React from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import Font from '../HOC/Font';
import '../css/loginfirst.css';


const OuterDiv = styled.div`
        width:90%;
        margin:0 auto;
        height:400px;
`;

const InnerDiv = styled.div`
    width:95%;
    margin:0 auto;
    height:360px;
    border:2px solid white;
    border-radius:5px;
`;

function LoginFirst(){
    
    const history = useHistory();
    const handleClick = (e)=>{
        e.preventDefault();
        console.log('clicked to go to the login page');
        history.push('/login');
    }
    return(
        <OuterDiv className="mt-5 rounded text-center d-flex bg-dark">
            <InnerDiv className="d-flex m-auto">
            <span className='m-auto border p-2 rounded' onClick={handleClick}>Go To Login Page</span>
            </InnerDiv>
        </OuterDiv>
    );
}

export default Font(LoginFirst);
