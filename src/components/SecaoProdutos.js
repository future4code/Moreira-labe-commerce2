import React from "react";
import styled from "styled-components";
import { CardProduto } from "./CardProduto";
import productList from "../data/produtos.json"

const ContainerSecao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    width: 80%;
    p{
        margin: 5px;
    }
    div{
        display: flex;
        align-items: center;
    }
`

const ContainerProdutos = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 15px;
    @media screen and (max-width: 1250px){
        grid-template-columns: repeat(3, 1fr);

    }
    @media screen and (max-width: 950px){
        grid-template-columns: repeat(2, 1fr);

    }
    @media screen and (max-width: 650px){
        display: flex;
        flex-direction: column;
    }
`

export class SecaoProdutos extends React.Component{
    
    state = {
        produtos: productList,
        order: "descrescente",
    }

    render() {

        let numProdutos = this.state.produtos.length

        let todosProdutos = this.state.produtos
        .sort((a, b) => {
            if (this.state.order === "crescente") return a.preco - b.preco
            else return b.preco - a.preco
        })
        .map((produto) => {
            return <CardProduto 
            key={produto.id} 
            img={produto.img} 
            gif={produto.gif}
            titulo={produto.titulo} 
            descricao={produto.descricao} 
            preco={produto.preco}/>
        })


        return <ContainerSecao>
            
            <ContainerHeader>
                <p>Total de Produtos: {numProdutos}</p>
                <div>
                    <p>Ordenar</p>
                    <select name="ordena" 
                    id="ordena-produtos" 
                    onChange={(e) => {this.setState({order: e.target.value})}}
                    >
                        <option value="decrescente">Mais caro</option>
                        <option value="crescente">Mais barato</option>
                    </select>
                    </div>
            </ContainerHeader>

            <ContainerProdutos>
                {todosProdutos}
            </ContainerProdutos>

        </ContainerSecao>
    }
}