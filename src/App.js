import React from 'react';
import './App.css';
import  { Carrinho } from './components/Carrinho.js'
import styled from 'styled-components'
import { SecaoProdutos } from './components/SecaoProdutos';
import productList from "./data/produtos.json"

const ContainerCarrinho = styled.div`
width: 70vw;
`
class App extends React.Component {
  
  state={ 
    produtos: productList,
    
    carrinho:[{
      produto:"xicara",
      quantidade: 6,
      valor: 50,
    },
    
    { produto:"camiseta",
    quantidade: 2,
    valor: 50,}] , 
    valorTotal:"",
    
    order: "descrescente",
  }
  
  CalculaValor = ()=>{
    const valor= this.state.carrinho.map((produto)=>{
      return produto.quantidade * produto.valor
    }).reduce((prev, curr) => prev + curr, 0);
    
    

    this.setState({valorTotal: valor})
           
  }

  componentDidMount(){
    this.CalculaValor()
  }

  render(){

    
    
    return (
      <div className="App">
        <SecaoProdutos 
          produtos={this.state.produtos} 
          order={this.state.order}/>
        <ContainerCarrinho/>
        <Carrinho produtosCarrinho={this.state.carrinho} valorTotal={this.state.valorTotal}/>
        
        
      </div>
    );
  }
  

  }

  
export default App;