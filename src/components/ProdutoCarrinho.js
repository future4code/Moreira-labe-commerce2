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
    margin: 5px;
    margin-right: 15px;
    width: fit-content;
    cursor: pointer;
}
p{
    font-weight: bold;
    font-size: 0.8em;
    margin: 0;
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
            <p>{this.props.nome}</p>
            <p className="descricao">{this.props.descricao}</p>
            <button value={this.props.value} onClick={this.props.onClick}>Remover</button>
        </ContainerFlex>
        )


    }


}