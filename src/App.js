import React from 'react'
import './App.css';
import { Route } from 'react-router-dom';
import { BrowserRouter, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login';
import Clientes from './pages/Clientes';
import Cadastro from './pages/Cadastro';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter >
        <Switch>

          <Route exact path="/" component={ Home } />
          <Route path="/login" component={ Login } />
          <Route path="/clients" component={ Clientes } />
          <Route path="/cadastro" component={ Cadastro } />
        </Switch>

      </BrowserRouter>

    );
  }
}

export default App;
