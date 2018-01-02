import fetch from 'isomorphic-fetch';

const baseURL = 'http://localhost:3000';

const API = {
  clients: {
    async getAll(client) {
      const response = await fetch(`${baseURL}/api/clients/${client.cliente}/${client.director}/${client.empresa}/${client.skip}/${client.limit}`);
      const data = await response.json();
      return data;
    },
  },
};
export default API;
