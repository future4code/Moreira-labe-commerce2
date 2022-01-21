import React from "react"
import styled from "styled-components"


const ContainerFlex = styled.div`
border-top: 1px solid lightgrey;
border-bottom: 1px solid lightgrey;
display: flex;
justify-content: space-between;
align-items: center;
width: 99%;
padding: 5px;
button{
        margin-right: 10px;
    }
p{
    font-weight: bold;
}
.descricao{
    color: lightgrey;
}
`


export class ProdutoCarrinho extends React.Component {

    render (){
     
        return (
            <ContainerFlex>
            <p>{this.props.quantidade}</p>

            <p>x</p>
            
            <p>{this.props.titulo}</p>

            <p className="descricao">{this.props.descricao}</p>
             
            <button onClick={this.props.onClickButton}>Remover</button>
           
        </ContainerFlex>
        )


    }


}