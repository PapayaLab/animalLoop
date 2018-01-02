import initialState from './initialState';
import {
  UPDATE_CLIENT_INIT,
  UPDATE_CLIENT_SUCCESS,
  UPDATE_CLIENT_FAILURE,
  ADD_CONTACT,
  REMOVE_CONTACT,
  CHANGE_CONTACT,
  CHANGE_FORM,
  FETCH_CLIENT_INIT,
  FETCH_CLIENT_SUCCESS,
  FETCH_CLIENT_FAILURE,
} from '../../../../actions/dashboard/comercial/update_cliente/types';

export default function updateClientReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CLIENT_INIT:
      return Object.assign({}, state, {
        loading: true,
        error: null,
        cliente: false,
      });
    case FETCH_CLIENT_SUCCESS:
      return Object.assign({}, state, {
        cliente: action.payload,
        error: null,
        loading: false,
        contacto: action.payload.contacto.length,
      });
    case FETCH_CLIENT_FAILURE:
      return Object.assign({}, state, {
        cliente: [],
        error: action.payload,
        loading: false,
      });
    case UPDATE_CLIENT_INIT:
      return Object.assign({}, state, {
        loading: true,
        error: null,
      });
    case UPDATE_CLIENT_FAILURE:
      return Object.assign({}, state, {
        error: action.payload,
        loading: false,
      });
    case UPDATE_CLIENT_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        error: null,
      });
    case ADD_CONTACT: {
      return Object.assign({}, state, {
        contacto: (state.contacto + 1),
      });
    }
    case REMOVE_CONTACT: {
      return Object.assign({}, state, {
        contacto: (state.contacto - 1 > 0) ? (state.contacto - 1) : 1,
      });
    }
    case CHANGE_CONTACT: {
      return Object.assign({}, state, {
        contacto: (action.payload > 0) ? action.payload : 1,
      });
    }
    case CHANGE_FORM: {
      return Object.assign({}, state, {
        cliente: JSON.parse(action.payload),
      });
    }
    default:
      return state;
  }
}
