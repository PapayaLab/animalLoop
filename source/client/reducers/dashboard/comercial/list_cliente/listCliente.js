import initialState from './initialState';
import {
  FETCH_CLIENTS_INIT,
  FETCH_CLIENTS_SUCCESS,
  FETCH_CLIENTS_FAILURE,
  FETCH_CLIENTS_SUCCESSMORE,
} from '../../../../actions/dashboard/comercial/list_cliente/types';

export default function saveClientReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CLIENTS_INIT:
      return Object.assign({}, state, {
        loading: true,
        error: null,
      });
    case FETCH_CLIENTS_SUCCESS:
      return Object.assign({}, state, {
        clientes: action.payload,
        error: null,
        loading: false,
      });
    case FETCH_CLIENTS_FAILURE:
      return Object.assign({}, state, {
        clientes: [],
        error: action.payload,
        loading: false,
      });
    case FETCH_CLIENTS_SUCCESSMORE:
      return Object.assign({}, state, {
        clientes: state.clientes.concat(action.payload),
        error: null,
        loading: false,
      });
    default:
      return state;
  }
}
