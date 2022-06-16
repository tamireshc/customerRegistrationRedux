const CADASTRAR_CLIENTE = 'CADASTRAR_CLIENTE';
const DELETAR_CLIENTE = 'DELETAR_CLIENTE'

const cadastrarCliente = (dadosCliente) => ({
  type: CADASTRAR_CLIENTE,
  payload: { dadosCliente }
})

const deletarCliente = (dadosCliente) => ({
  type: DELETAR_CLIENTE,
  payload: { dadosCliente }
})

export { CADASTRAR_CLIENTE, DELETAR_CLIENTE, cadastrarCliente, deletarCliente }