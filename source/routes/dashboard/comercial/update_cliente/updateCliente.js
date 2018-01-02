import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as clientActions from '../../../../client/actions/dashboard/comercial/update_cliente/updateClienteActions';
import UpdateClienteComponent from '../../../../client/components/dashboard/comercial/update_cliente/updateClienteComponent';

function mapStateToProps(state) {
  return {
    contacto: state.reducer.updateCliente.contacto,
    tipoCliente: state.reducer.updateCliente.tipoCliente,
    mercado: state.reducer.updateCliente.mercado,
    empresa: state.reducer.updateCliente.empresa,
    sucursal: state.reducer.updateCliente.empresa,
    clienteActivo: state.reducer.updateCliente.clienteActivo,
    condicionPago: state.reducer.updateCliente.condicionPago,
    medioPago: state.reducer.updateCliente.medioPago,
    banco: state.reducer.updateCliente.banco,
    cliente: state.reducer.updateCliente.cliente,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(clientActions, dispatch),
  };
}

const updateCliente = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpdateClienteComponent);

export default updateCliente;
