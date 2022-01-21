import React from "react"
import styled from "styled-components"
import { ProdutoCarrinho } from "./ProdutoCarrinho"


const Container = styled.div`
border: 1px solid green ;
display: flex;
flex-direction:column ;
justify-content: space-between;
align-items:flex-start;
p,h1{
    margin:5px;
}
`








export class Carrinho extends React.Component{
   // aqui seria colocado as funções ,mas agora são no exopo classe render
   //chamamos com this
   
   //render roda toda vez que o estado é  atualizado
   
   // state
   render (){
    const carrinhoProdutos=this.props.produtosCarrinho.map((produto)=>{
      
        return <ProdutoCarrinho
        quantidade={produto.quantidade}
        produto={produto.produto}
        />
      })
    
     return (
         <Container>
          <h1>Carrinho</h1>
            {carrinhoProdutos}
         <p>{this.props.valorTotal}</p>
           
         </Container>
     

     )
     }
    }
