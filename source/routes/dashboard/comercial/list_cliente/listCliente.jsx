import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as clientActions from '../../../../client/actions/dashboard/comercial/list_cliente/listClienteActions';
import ListClienteComponent from '../../../../client/components/dashboard/comercial/list_cliente/listClienteComponent';

function mapStateToProps(state) {
  return {
    clientes: state.reducer.listCliente.clientes,
    loading: state.reducer.listCliente.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(clientActions, dispatch),
  };
}

const listCliente = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListClienteComponent);

export default listCliente;
