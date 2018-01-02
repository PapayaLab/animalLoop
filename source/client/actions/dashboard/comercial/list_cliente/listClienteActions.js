import {
  FETCH_CLIENTS_INIT,
  FETCH_CLIENTS_SUCCESS,
  FETCH_CLIENTS_FAILURE,
  FETCH_CLIENTS_SUCCESSMORE,
} from './types';
import API from './api';

/* Actions Creators */
function fetchClientsSuccess(clients) {
  return {
    type: FETCH_CLIENTS_SUCCESS,
    payload: clients,
  };
}

function fetchClientsFailure(error) {
  return {
    type: FETCH_CLIENTS_FAILURE,
    payload: error,
  };
}

function fetchClientsInit() {
  return {
    type: FETCH_CLIENTS_INIT,
  };
}

function fetchClientsSuccessMore(clients) {
  return {
    type: FETCH_CLIENTS_SUCCESSMORE,
    payload: clients,
  };
}

// Actions Creators (Async)

export function fetchClients(client) {
  return async (dispatch) => {
    dispatch(fetchClientsInit());
    try {
      const data = await API.clients.getAll(client);
      dispatch(fetchClientsSuccess(data.clients));
    } catch (error) {
      dispatch(fetchClientsFailure(error));
    }
  };
}

export function fetchClientsMore(client) {
  return async (dispatch) => {
    dispatch(fetchClientsInit());
    try {
      const data = await API.clients.getAll(client);
      dispatch(fetchClientsSuccessMore(data.clients));
    } catch (error) {
      dispatch(fetchClientsFailure(error));
    }
  };
}
