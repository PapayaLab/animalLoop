import { INCREMENTO_PRODUCTO, DECREMENTO_PRODUCTO } from '../../../../actions/dashboard/dam/save_cotizacion/saveCotizacionActions';

const initialState = {
  condicionFacturacion: [
    'Seleccionè',
    '50% CO - 50%EN',
  ],
  condicionPago: [
    'Seleccionè',
    '50% CO - 50%EN',
  ],
  iva: [
    'Iva',
    'Retencion',
  ],
  productos: 5,
  loading: false,
};

const hola = (state = initialState, action = {}) => {
  switch (action.type) {
    case INCREMENTO_PRODUCTO: {
      return Object.assign({}, state, {
        productos: (state.productos + 1),
      });
    }
    case DECREMENTO_PRODUCTO: {
      return Object.assign({}, state, {
        productos: (state.productos - 1),
      });
    }
    default: {
      return state;
    }
  }
};

export default hola;
