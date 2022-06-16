import React from 'react';
import { connect } from 'react-redux';
import { cadastrarCliente } from '../redux/actions/actions';

class Cadastro extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      idade: '',
      email: '',
    }
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [ name ]: value,
    });
  }

  goClientes = () => {
    console.log('clientes')
    this.props.history.push('/clients')
  }

  cadastrar = () => {
    const { name, idade, email } = this.state
    this.props.dispatch(cadastrarCliente({ name, idade, email }))
    this.props.history.push('/cadastro')
  }

  render() {
    const { history, dispatch } = this.props;

    const { name, idade, email } = this.state;

    return (
      <div>
        <label>Nome<input type='text' name='name' value={ name } onChange={ this.handleChange } /></label>
        <label>Idade<input type='text' name='idade' value={ idade } onChange={ this.handleChange } /></label>
        <label>Email<input type='email' name='email' value={ email } onChange={ this.handleChange } /></label>
        <button onClick={ this.cadastrar }>Cadastrar</button>
        <button onClick={ this.goClientes }>Ver Clientes</button>
      </div>
    );
  }
};

export default connect()(Cadastro);