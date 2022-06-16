import React from 'react';
import { connect } from 'react-redux';
import { deletarCliente } from '../redux/actions/actions';

class Clientes extends React.Component {
  goCadastro = () => {
    console.log('cadastro')
    this.props.history.push('/cadastro')
  }

  deletarCliente = (cliente) => {
    const clientesInitial = this.props.clientesLidos
    const clientesAtualizados = clientesInitial.filter((item) => item.name !== cliente.name)
    this.props.dispatch(deletarCliente(clientesAtualizados))
  }

  ordenar = () => {
    const clientesInitial = this.props.clientesLidos
    const clientesAtualizados = [ ...clientesInitial.sort(function (a, b) {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    }) ]
    this.props.dispatch(deletarCliente(clientesAtualizados))
  }

  render() {
    const { history, clientesLidos, dispatch } = this.props;

    return (
      <div>
        { clientesLidos.map((item) => <div>
          <p>{ item.name }</p>
          <p>{ item.email }</p>
          <p>{ item.idade }</p>
          <button onClick={ () => this.deletarCliente(item) }>X</button>
        </div>) }
        <button onClick={ this.goCadastro }>Ir para cadastro</button>
        <button onClick={ this.ordenar }>Ordenar alfabetico</button>
      </div>
    );
  }

};

const mapStateToProps = (state) => ({
  clientesLidos: state.reducerCadastro.clientes,
})



export default connect(mapStateToProps)(Clientes);