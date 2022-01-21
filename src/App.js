import React from 'react';
import './App.css';
import  { Carrinho } from './components/Carrinho.js'
import { SecaoProdutos } from './components/SecaoProdutos';
import productList from "./data/produtos.json"


class App extends React.Component {
  
  state={ 
    produtos: productList,
    
    carrinho:[
    ], 

    valorTotal:"",
    
    order: "descrescente",
  }
  

  adicionaCarrinho = (e) => {
    const produtoId = e.target.value

    const produtoExisteCarrinho = this.state.carrinho.find(
      (produto) => produtoId == produto.id,
    )
    if (produtoExisteCarrinho) {
      const novoCarrinho = this.state.carrinho.map((produto) =>
        produtoId == produto.id ? { ...produto, quantidade: produto.quantidade + 1 } : produto,
      )
      this.setState({
        carrinho: novoCarrinho,
      })
    } else {
      const novoProduto = this.state.produtos.find((produto) => produtoId == produto.id);
      const novoCarrinho = [ ...this.state.carrinho, novoProduto]
      this.setState({
        carrinho: novoCarrinho,
      })
    }
    this.CalculaValor()
  };

  CalculaValor = ()=>{

    const valor = this.state.carrinho
      .map((produto)=>{return produto.quantidade * produto.preco})
      .reduce((prev, curr) => prev + curr, 0)
      
    this.setState({valorTotal: valor})     
  }

  render(){
    
    return (
      <div className="App">
        <SecaoProdutos 
          produtos={this.state.produtos} 
          order={this.state.order}
          onChange={(e) => {this.setState({order: e.target.value})}}
          onClick={this.adicionaCarrinho}
          />
        
          <Carrinho 
          produtosCarrinho={this.state.carrinho} 
          valorTotal={this.state.valorTotal}
          />
      </div>
    );
  }
  }

  
export default App;