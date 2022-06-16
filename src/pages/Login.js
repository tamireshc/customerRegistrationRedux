import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {


  logar = () => {
    console.log('loguei')
    this.props.history.push('/clients')
  }

  render() {
    const { history } = this.props;
    return (
      <div>
        <label>Email<input type='email' /></label>
        <label>Senha<input type='password' /></label>
        <button onClick={ this.logar }>Logar</button>
      </div>
    );
  }
};

// Após o login ser efetuado, o usuário deve ser redirecionado para a página de Clientes cadastrados.

export default connect()(Login);