import React from "react";
import styled from "styled-components";
import { CardProduto } from "./CardProduto";

const ContainerSecao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
`

const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    width: 60%;
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
    align-content: center;
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
    

    render() {

        let numProdutos = this.props.produtos.length

        let todosProdutos = this.props.produtos
        .sort((a, b) => {
            if (this.props.order === "crescente") return a.preco - b.preco
            else return b.preco - a.preco
        })
        .map((produto) => {
            return <CardProduto 
            key={produto.id}
            produtoId={produto.id}
            img={produto.img} 
            gif={produto.gif}
            titulo={produto.titulo} 
            descricao={produto.descricao} 
            preco={produto.preco}
            onClick={this.props.onClick}/>
        })


        return <ContainerSecao>
            
            <ContainerHeader>
                <p>Total de Produtos: {numProdutos}</p>
                <div>
                    <p>Ordenar</p>
                    <select name="ordena" 
                    id="ordena-produtos" 
                    onChange={this.props.onChange}>
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