import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  CHANGE_CONTACT,
  SAVE_CLIENTE_SUCCESS,
  SAVE_CLIENTE_FAILURE,
  SAVE_CLIENT_INIT,
  RESET_STATE,
} from './types';
import API from './api';

/* Actions Creators */
export function resetState() {
  return {
    type: RESET_STATE,
  };
}

export function addContact() {
  return {
    type: ADD_CONTACT,
  };
}

export function removeContact() {
  return {
    type: REMOVE_CONTACT,
  };
}
export function changeContact(number) {
  return {
    type: CHANGE_CONTACT,
    payload: number,
  };
}

function saveClientSuccess() {
  return {
    type: SAVE_CLIENTE_SUCCESS,
  };
}

function saveClientFailure(error) {
  return {
    type: SAVE_CLIENTE_FAILURE,
    payload: error,
  };
}

// Actions Creators (Async)

export function saveClient(product) {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: SAVE_CLIENT_INIT,
      };
    });

    try {
      await API.client.save(product);
      return dispatch(saveClientSuccess());
    } catch (error) {
      return dispatch(saveClientFailure(error));
    }
  };
}
