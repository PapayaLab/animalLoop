import express from 'express';
import clientCtrl from '../controllers/client';

const client = express.Router();
const clients = express.Router();

client.post('/', clientCtrl.saveClient);
client.put('/:clientId', clientCtrl.updateClient);
client.get('/:clientId', clientCtrl.getCLient);

clients.get('/:cliente/:director/:empresa/:skip/:limit', clientCtrl.getClients);


export default {
  client,
  clients,
};
