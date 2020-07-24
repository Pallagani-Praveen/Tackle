import React,{Component} from 'react';
import styled from 'styled-components';

function Font(ComposedComponent){
    const FontDiv = styled.div`
        font-family:'Courier New', Courier, monospace;
    `;
    return class extends Component{
        render(){
            return(
                <FontDiv>
                    <ComposedComponent/>
                </FontDiv>
            );
        }
    }
}

export default   Font;