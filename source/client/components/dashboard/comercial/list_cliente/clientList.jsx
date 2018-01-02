import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
/* Style */
import DashBoardStyle from '../../../../../../public/dashboard.scss';

const ClientList = ({
  loading,
  clientes,
  handleRedirect,
}) => (
  <div className={DashBoardStyle.module_table_new}>
    { loading && <span>Cargando Datos ...</span> }
    <table className={DashBoardStyle.table_normal}>
      <thead>
        <tr>
          <th>Acciones</th>
          <th>Cliente</th>
          <th>Empresa</th>
          <th>Director</th>
        </tr>
      </thead>
      <tbody>
        {
          clientes.map(itemClientes => (
            <tr key={uuid.v4()}>
              <td>
                <select onChange={handleRedirect}>
                  <option value="">Seleccione</option>
                  <option value={`/dashboard/updateCliente/${itemClientes._id}`}>Descripción</option>
                </select>
              </td>
              <td>{itemClientes.cliente}</td>
              <td>{itemClientes.empresa}</td>
              <td>{itemClientes.director_proyecto}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
);

ClientList.propTypes = {
  clientes: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  handleRedirect: PropTypes.func.isRequired,
};

export default ClientList;
