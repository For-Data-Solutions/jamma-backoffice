export const pedidoReducer = (state = { listaPedidos: [] }, { type, payload }) => {
  switch (type) {
    case 'ESCOGER_PEDIDO':
      return {
        ...state,
        listaPedidos: [
          ...state.listaPedidos,
          payload
        ]
      }

    default:
      return state
  }
}