import React from "react"
import styled from "styled-components"
import { ProdutoCarrinho } from "./ProdutoCarrinho"

const Container = styled.div`
margin: 15px;
min-width: 25%;
width: fit-content;
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
        margin-top: 10px;
        margin-left: 15px;
    }
    img{
        width: 20px;
        margin-right: 5px;
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
        onClick={this.props.onClick}
        value={produto.id}
        />
      })
    
    
     return (
         <Container>
          <h3>
              <img src="http://www.clker.com/cliparts/U/D/n/G/6/h/white-shopping-cart-md.png" alt="carrinho"/>
              Carrinho</h3>
            {carrinhoProdutos}
         <p>Valor Total: R${this.props.valorTotal}</p>
           
         </Container>
     

     )
     }
    }
