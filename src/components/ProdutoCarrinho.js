import React from "react"
import styled from "styled-components"


const ContainerFlex = styled.div`
border : 1px solid green ;
display: flex;
flex-direction: row ;
justify-content: space-between;
width:100%;
p{
    margin:5px;
}
`


export class ProdutoCarrinho extends React.Component {

    render (){
     
        return (
            <ContainerFlex>
            <p>{this.props.quantidade} x</p>
            
            <p>{this.props.produto}</p>
             
            <button onClick={this.props.onClickButton}>Remover</button>

           
        </ContainerFlex>
        )


    }


}