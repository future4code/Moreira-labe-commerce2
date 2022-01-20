import React from 'react';
import './App.css';
import { SecaoProdutos } from './components/SecaoProdutos';
import productList from "./data/produtos.json"

class App extends React.Component {

  state = {
    produtos: productList,
    order: "descrescente",
}

  render() {
  return (
    <div className="App">
      <SecaoProdutos 
      produtos={this.state.produtos} 
      order={this.state.order}/>
    </div>
  );
}
}

export default App;