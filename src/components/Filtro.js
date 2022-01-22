import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
margin: 5px;
min-width: 15%;
width: fit-content;
border-radius: 2px;
display: flex;
flex-direction:column ;
justify-content: space-between;
align-items:flex-start;
height: fit-content;
background-color: #371a48;
color: white;
box-shadow: 0px 5px 15px gray;
    p, h3{
        margin-top: 5px;
        margin-left: 10px;
    }
    img{
        width: 10px;
        margin-right: 2px;
    }
`

const Titulo = styled.h2`
  text-align: center;
  margin-bottom: 1em;
  margin-left: 68npx;
`;

const InputTag = styled.div`
  margin: 20px 0;
  margin-left: 7.5px;
`;

class Filtro extends React.Component {
  
  listaFiltrada = () => {
    return this.props.produtos
      .filter((produto) => produto.nome.toLowerCase().includes(this.props.peloNome.toLowerCase()))
      .filter((produto) => produto.preco >= this.props.valorMinimo || this.props.valorMinimo === '')
      .filter((produto) => produto.preco <= this.props.valorMaximo || this.props.valorMaximo === '' );
      
  };
  render() {
    return (
      <Container>
        <Titulo> Filtros </Titulo>
        <InputTag>
          <label>Valor Mínimo </label>
          <br />
          <input
            type="number"
            value={this.props.valorMinimo}
            onChange={this.props.onChangeValorMinimo}
          />
        </InputTag>
        <InputTag>
          <label>Valor Maximo </label>
          <br />
          <input
            type="number"
            value={this.props.valorMaximo}
            onChange={this.props.onChangeValorMaximo}
          />
        </InputTag>
        <InputTag>
          <label>Nome do produto </label>
          <br />
          <input type="text" value={this.props.peloNome} onChange={this.props.onChangePeloNome} />
        </InputTag>
      </Container>
    );
  }
}
export default Filtro;
