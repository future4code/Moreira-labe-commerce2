import React from "react";
import styled from "styled-components";

const ProdutoContainer = styled.div`
    border: 1px solid lightgrey;
    border-radius: 10px;
    transition: 0.3s ease;
    width: 80%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin: 10px;
    box-sizing: border-box;
    :hover{
        box-shadow: 0px 2px 4px gray;
        .stactic{
            display: none;
        }
        .animated{
            display: block;
        }
    }
    img{
        width: 100%;
    }
    .animated{
        display: none;
    }
    .nome{
        font-size: medium;
        font-weight: 750;
        margin: 5px 10px 0px 10px;
    }
    .descricao{
        margin: 0 10px;
        color: grey;
        font-weight: 500;
    }
    .preco{
        font-weight: bold;
        font-size: 1.1em;
    }
    button{
        display: flex;
        align-items: center;
        border: 1px solid;
        border-radius: 10px;
        background-color: #69268a;
        color: white;
        transition: 0.2s ease;
        align-self: center;
        padding: 10px;
        font-size: 0.8em;
        cursor: pointer;
        img {
            width: 20px;
        }
        p {
            margin: 0;
            margin-right: 5px;
            font-size: 1.5em;
            font-weight: bolder;
        }
        :hover{
            background-color: #8931b4;
        }
        :active{
            background-color: #69268a;
        }
    }
    div{
        margin: 0.5em 0 0 0;
        width: 100%;
        border-top: 1px solid lightgrey;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
`

export class CardProduto extends React.Component{
    
    render() {

        return <ProdutoContainer>
            <img className="stactic" src={this.props.img} alt="Foto do Produto" />
            <img className="animated" src={this.props.gif} alt="Foto do Produto" />
            <p className="nome">{this.props.nome}</p>
            <p className="descricao">{this.props.descricao}</p>
            <div>
            <p className="preco">{`R$${this.props.preco}`}</p>
            <button value={this.props.produtoId} onClick={this.props.onClick}>
                + Carrinho
                </button>
            </div>
            </ProdutoContainer>
    }
}