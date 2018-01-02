import fetch from 'isomorphic-fetch';

const baseURL = 'http://localhost:3000';

const API = {
  client: {
    async update(item, id) {
      const response = await fetch(`${baseURL}/api/client/${id}`, {
        method: 'PUT',
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
        body: JSON.stringify(item),
      });
      const data = await response.json();
      return data;
    },
    async getSingle(id) {
      const response = await fetch(`${baseURL}/api/client/${id}`);
      const data = await response.json();
      return data;
    },
  },
};
export default API;
