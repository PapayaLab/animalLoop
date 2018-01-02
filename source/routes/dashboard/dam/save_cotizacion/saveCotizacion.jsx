import { connect } from 'react-redux';

import { incrementoProducto, decrementoProducto } from '../../../../client/actions/dashboard/dam/save_cotizacion/saveCotizacionActions';
import SaveCotizacionComponent from '../../../../client/components/dashboard/dam/save_cotizacion/SaveCotizacionComponent';

const mapStateToProps = state => ({
  condicionFacturacion: state.reducer.saveCotizacion.condicionFacturacion,
  condicionPago: state.reducer.saveCotizacion.condicionPago,
  iva: state.reducer.saveCotizacion.iva,
  productos: state.reducer.saveCotizacion.productos,
  loading: state.reducer.saveCotizacion.loading,
});

const mapDispatchToProps = dispatch => ({
  incremento: () => {
    dispatch(incrementoProducto());
  },
  decremento: () => {
    dispatch(decrementoProducto());
  },
});

const saveCotizacion = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveCotizacionComponent);

export default saveCotizacion;
