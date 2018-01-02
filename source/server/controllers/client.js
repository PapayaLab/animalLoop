import Client from '../models/client';

function saveClient(req, res) {
  const client = new Client();
  client.rut_cliente = req.body.rut_cliente;
  client.cliente = req.body.cliente;
  client.razon_social = req.body.razon_social;
  client.giro = req.body.giro;
  client.rubro = req.body.rubro;
  client.numero_empleado = req.body.numero_empleado;
  client.tipo_cliente = req.body.tipo_cliente;
  client.mercado = req.body.mercado;
  client.empresa = req.body.empresa;
  client.sucursal = req.body.sucursal;
  client.director_proyecto = req.body.director_proyecto;
  client.cliente_activo = req.body.cliente_activo;
  client.contacto = req.body.contacto;
  client.facturacion_electronica = req.body.facturacion_electronica;
  client.mail_facturacion = req.body.mail_facturacion;
  client.forma_pago = req.body.forma_pago;
  client.contacto_proveedores = req.body.contacto_proveedores;
  client.telefono_proveedores = req.body.telefono_proveedores;
  client.mail_proveedores = req.body.mail_proveedores;
  client.medio_pago = req.body.medio_pago;
  client.direccion_pago = req.body.direccion_pago;
  client.banco_cliente = req.body.banco_cliente;

  client.save().then((clientStored) => {
    res.status(200).send({ client: clientStored });
  }, (err) => {
    res.status(500).send({ message: `Error al salvar en la base de datos: ${err} ` });
  });
}

function updateClient(req, res) {
  const clientId = req.params.clientId;
  const update = req.body;

  Client.findByIdAndUpdate(clientId, update, (err, clientUpdated) => {
    if (err) res.status(500).send({ message: `Error al actualizar la persona: ${err}` });
    res.status(200).send({ person: clientUpdated });
  });
}

function getCLient(req, res) {
  const clientId = req.params.clientId;

  Client.findById(clientId, (err, client) => {
    if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` });
    if (!client) return res.status(404).send({ message: 'La persona no existe' });
    res.status(200).send({ client });
  });
}

function getClients(req, res) {
  const query = {};

  if (req.params.cliente !== 'null') {
    query.cliente = { $regex: `.*${req.params.cliente}.*` };
  }
  if (req.params.director !== 'null') {
    query.director_proyecto = { $regex: `.*${req.params.director}.*` };
  }
  if (req.params.empresa !== 'null') {
    query.empresa = { $regex: `.*${req.params.empresa}.*` };
  }
  const skip = parseInt(req.params.skip, 10);
  const limit = parseInt(req.params.limit, 10);
  Client.find(query, (err, clients) => {
    if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` });
    if (!clients) return res.status(404).send({ message: 'No existen personas' });

    return res.status(200).send({ clients });
  }).skip(skip).limit(limit);
}

module.exports = {
  saveClient,
  updateClient,
  getCLient,
  getClients,
};
