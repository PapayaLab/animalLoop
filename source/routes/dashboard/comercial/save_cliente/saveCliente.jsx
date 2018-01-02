import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as clientActions from '../../../../client/actions/dashboard/comercial/save_cliente/saveClienteActions';
import SaveClienteComponent from '../../../../client/components/dashboard/comercial/save_cliente/saveClienteComponent';

function mapStateToProps(state) {
  return {
    contacto: state.reducer.saveCliente.contacto,
    tipoCliente: state.reducer.saveCliente.tipoCliente,
    mercado: state.reducer.saveCliente.mercado,
    empresa: state.reducer.saveCliente.empresa,
    sucursal: state.reducer.saveCliente.empresa,
    clienteActivo: state.reducer.saveCliente.clienteActivo,
    condicionPago: state.reducer.saveCliente.condicionPago,
    medioPago: state.reducer.saveCliente.medioPago,
    banco: state.reducer.saveCliente.banco,

  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(clientActions, dispatch),
  };
}

const saveCliente = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveClienteComponent);

export default saveCliente;
