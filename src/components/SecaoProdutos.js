import React from "react";
import styled from "styled-components";
import { CardProduto } from "./CardProduto";

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
    @media screen and (max-width: 1080px){
        grid-template-columns: repeat(3, 1fr);

    }
    @media screen and (max-width: 800px){
        grid-template-columns: repeat(2, 1fr);

    }
    @media screen and (max-width: 600px){
        display: flex;
        flex-direction: column;
    }
`

export class SecaoProdutos extends React.Component{
    
    state = {
        produtos: [{
            id: 1,
            img: "https://i.postimg.cc/2jHGzHqj/Design-sem-nome-9.png",
            titulo: "Moletom AstroCode",
            descricao: "roxo{Dev}",
            preco: "200"
        },
        {
            id: 2,
            img: "https://i.postimg.cc/3xMQ2LLQ/10.png",
            titulo: "Caneca Foguete Retrô",
            descricao: "Azul",
            preco: "80"
        },
        {
            id: 3,
            img: "https://i.postimg.cc/h45Bt4Tj/11.png",
            titulo: "Caneca Foguete",
            descricao: "Preta",
            preco: "70"
        },
        {
            id: 4,
            img: "https://i.postimg.cc/Kv3ykXD5/9.png",
            titulo: "Caneca Foguete",
            descricao: "roxo{Dev}",
            preco: "70"
        },
        {
            id: 4,
            img: "https://i.postimg.cc/Kv3ykXD5/9.png",
            titulo: "Caneca Foguete",
            descricao: "roxo{Dev}",
            preco: "70"
        }]
    }

    render() {

        let numProdutos = this.state.produtos.length

        let todosProdutos = this.state.produtos.map((produto) => {
            return <CardProduto key={produto.id} img={produto.img} titulo={produto.titulo} descricao={produto.descricao} preco={produto.preco}/>
        })


        return <ContainerSecao>
            
            <ContainerHeader>
                <p>Total de Produtos: {numProdutos}</p>
                <div>
                    <p>Ordenar</p>
                    <select name="ordena" id="ordena-produtos">
                        <option value="crescente">Crescente</option>
                        <option value="decrescente">Decrescente</option>
                    </select>
                    </div>
            </ContainerHeader>

            <ContainerProdutos>
                {todosProdutos}
            </ContainerProdutos>

        </ContainerSecao>
    }
}