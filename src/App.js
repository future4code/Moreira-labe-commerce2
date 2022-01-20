import React from 'react';
import './App.css';
import  { Carrinho } from './components/Carrinho.js'
import styled from 'styled-components'

const ContainerCarrinho = styled.div`
width: 70vw;
`
class App extends React.Component {
  
  state={ 
    carrinho:[{
      produto:"xicara",
      quantidade: 6,
      valor: 50,
    },
    
    { produto:"camiseta",
    quantidade: 2,
    valor: 50,}] , 
    
    valorTotal:"" ,
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
    // se fosse dentro do render a função colocaria o const 
    
    
    return (
      <div className="App">
        <ContainerCarrinho/>
        <Carrinho produtosCarrinho={this.state.carrinho} valorTotal={this.state.valorTotal}/>
        
        
      </div>
    );
  }
  

  }

  
export default App;
