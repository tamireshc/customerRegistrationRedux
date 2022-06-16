import { combineReducers } from 'redux';
import { CADASTRAR_CLIENTE, DELETAR_CLIENTE } from '../actions/actions';

const INITIAL_STATE = {
  clientes: [],

}

const reducerCadastro = (state = INITIAL_STATE, action) => {
  if (action.type === CADASTRAR_CLIENTE) {
    return {
      clientes: [ ...state.clientes, action.payload.dadosCliente ]
    }
  };
  if (action.type === DELETAR_CLIENTE) {
    return {
      clientes: action.payload.dadosCliente

    }
  } else {
    return state
  }
}



const rootReducer = combineReducers({ reducerCadastro })

export default rootReducer 