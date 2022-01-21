import React from "react"
import styled from "styled-components"
import { ProdutoCarrinho } from "./ProdutoCarrinho"

const Container = styled.div`
margin: 15px;
width: 25%;
border-radius: 15px;
display: flex;
flex-direction:column ;
justify-content: space-between;
align-items:flex-start;
height: fit-content;
background-color: #371a48;
color: white;
box-shadow: 0px 5px 15px gray;
    p, h3{
        margin: 5px;
    }
`

export class Carrinho extends React.Component{

   render (){
       


    const carrinhoProdutos = this.props.produtosCarrinho.map((produto)=>{
      
        return <ProdutoCarrinho
        id={produto.id}
        quantidade={produto.quantidade}
        titulo={produto.titulo}
        descricao={produto.descricao}
        key={produto.id}
        />
      })
    
    
     return (
         <Container>
          <h3>Carrinho</h3>
            {carrinhoProdutos}
         <p>Valor Total: {this.props.valorTotal}</p>
           
         </Container>
     

     )
     }
    }
