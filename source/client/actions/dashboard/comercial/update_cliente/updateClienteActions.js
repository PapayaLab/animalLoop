import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  CHANGE_CONTACT,
  CHANGE_FORM,
  UPDATE_CLIENT_SUCCESS,
  UPDATE_CLIENT_FAILURE,
  UPDATE_CLIENT_INIT,
  FETCH_CLIENT_INIT,
  FETCH_CLIENT_SUCCESS,
  FETCH_CLIENT_FAILURE,
} from './types';
import API from './api';

/* Actions Creators */

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

export function changeForm(client) {
  return {
    type: CHANGE_FORM,
    payload: client,
  };
}

function fetchClientSuccess(client) {
  return {
    type: FETCH_CLIENT_SUCCESS,
    payload: client,
  };
}

function fetchClientFailure(error) {
  return {
    type: FETCH_CLIENT_FAILURE,
    payload: error,
  };
}

function fetchClientInit(client) {
  return {
    type: FETCH_CLIENT_INIT,
    payload: client,
  };
}

function updateClientSuccess() {
  return {
    type: UPDATE_CLIENT_SUCCESS,
  };
}

function updateClientFailure(error) {
  return {
    type: UPDATE_CLIENT_FAILURE,
    payload: error,
  };
}

// Actions Creators (Async)

export function updateClient(client, id) {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: UPDATE_CLIENT_INIT,
      };
    });

    try {
      await API.client.update(client, id);
      return dispatch(updateClientSuccess());
    } catch (error) {
      return dispatch(updateClientFailure(error));
    }
  };
}

export function fetchClient(id) {
  return async (dispatch) => {
    dispatch(fetchClientInit());
    try {
      const data = await API.client.getSingle(id);
      dispatch(fetchClientSuccess(data.client));
    } catch (error) {
      dispatch(fetchClientFailure(error));
    }
  };
}
