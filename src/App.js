import React from 'react';
import styled from 'styled-components';
import Filtro from './components/Filtro';
import  { Carrinho } from './components/Carrinho.js'
import { SecaoProdutos } from './components/SecaoProdutos';
import { SiteHeader } from './components/SiteHeader.js';
// import ListaProdutos from "./data/produtos.json"

import ListaProdutos from './components/ListaProdutos.json';


const AppContainer = styled.div `
  text-align: center;
  display:flex;
  margin: 0;
  padding: 0;
  justify-content: space-between;
  @media screen and (max-width: 650px){
        display: flex;
        flex-direction: column;
        align-items: center;
  }
`

class App extends React.Component {
  
  state={ 
    valorMinimo: 50,
    valorMaximo: 200,
    produtos: ListaProdutos,
    carrinho:[],
    order: "descrescente",
  }
  



  adicionaCarrinho = (e) => {
    const produtoId = Number(e.target.value)

    const produtoExisteCarrinho = this.state.carrinho.find(
      (produto) => produtoId === produto.id,
    )
    if (produtoExisteCarrinho) {
      const novoCarrinho = this.state.carrinho.map((produto) =>
        produtoId === produto.id ? { ...produto, quantidade: produto.quantidade + 1 } : produto,
      )
      this.setState({
        carrinho: novoCarrinho,
      })
    } else {
      const novoProduto = this.state.produtos.find((produto) => produtoId === produto.id);
      const novoCarrinho = [ ...this.state.carrinho, novoProduto]
      this.setState({
        carrinho: novoCarrinho,
      })
    }
  };

  removeCarrinho = (e) => {
    let produtoId = Number(e.target.value)
    const novoCarrinho = this.state.carrinho.filter((produto) => {
      return produtoId !== produto.id
    }).map((produto) => {
      return produto
    })
    this.setState({
      carrinho: novoCarrinho
    })
  }


  render(){
    
    let valorTotal = this.state.carrinho
    .map((produto)=>{return produto.quantidade * produto.preco})
    .reduce((prev, curr) => prev + curr, 0)

    return (<>
      <SiteHeader/>
      <AppContainer>
      <Filtro

         />
        <SecaoProdutos 
          produtos={this.state.produtos} 
          order={this.state.order}
          onChange={(e) => {this.setState({order: e.target.value})}}
          onClick={this.adicionaCarrinho}
          /> 
          <Carrinho 
          produtosCarrinho={this.state.carrinho} 
          valorTotal={valorTotal}
          onClick={this.removeCarrinho}
          />
      </AppContainer>
      </>
    );
  }
  }

  
export default App;