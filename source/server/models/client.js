import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const ClientSchema = Schema({
  rut_cliente: String,
  cliente: String,
  razon_social: String,
  giro: String,
  rubro: String,
  numero_empleado: Number,
  tipo_cliente: String,
  mercado: String,
  empresa: String,
  sucursal: String,
  director_proyecto: String,
  cliente_activo: String,
  contacto: [{ nombre: String, apellido: String, mail: String, telefono: String }],
  facturacion_electronica: String,
  mail_facturacion: String,
  forma_pago: String,
  contacto_proveedores: String,
  telefono_proveedores: String,
  mail_proveedores: String,
  medio_pago: String,
  direccion_pago: String,
  banco_cliente: String,
});

module.exports = mongoose.model('Client', ClientSchema);
