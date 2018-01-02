import { combineReducers } from 'redux';

import singUp from './singUp';
import saveCotizacion from './dashboard/dam/save_cotizacion/saveCotizacion';
import saveCliente from './dashboard/comercial/save_cliente/saveCliente';
import listCliente from './dashboard/comercial/list_cliente/listCliente';
import updateCliente from './dashboard/comercial/update_cliente/updateCliente';

const reducer = combineReducers({
  singUp,
  saveCotizacion,
  saveCliente,
  listCliente,
  updateCliente,
});

export default reducer;
