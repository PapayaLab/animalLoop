import React from 'react';
import { Route, Link, Switch} from 'react-router-dom';

/* Style */
import DashBoardStyle from '../../../../../../public/dashboard.scss';

const ListCotizacionComponent = () => (
  <div className={DashBoardStyle.main}>
    <div className={DashBoardStyle.title}>
      <h3>Listado cotización</h3>
    </div>

    <div className={DashBoardStyle.module_filter}>
      <div className={DashBoardStyle.item_filter}>
        <label htmlFor="numeroCotizacion">Nº Cotización</label>
        <input autoComplete="off" type="text" id="numeroCotizacion" name="numeroCotizacion" />
      </div>
      <div className={DashBoardStyle.item_filter}>
        <label htmlFor="ejecutivo">Ejecutivo</label>
        <input autoComplete="off" type="text" id="ejecutivo" name="ejecutivo" />
      </div>
      <div className={DashBoardStyle.item_filter}>
        <label htmlFor="ejecutivo">Dibujante</label>
        <input autoComplete="off" type="text" name="ejecutivo" id="ejecutivo" />
      </div>
      <div className={DashBoardStyle.item_filter} >
        <label htmlFor="estado">Estado</label>
        <select id="estado" name="estado">
          <option value="En Proceso">En Proceso</option>
          <option value="Nulo">Nulo</option>
          <option value="Ok">Ok</option>
        </select>
      </div>
      <div className={DashBoardStyle.item_filter} >
        <label htmlFor="fechaDesde">Fecha Desde</label>
        <input className={DashBoardStyle.module_filter_date} type="text" id="fechaDesde" name="fechaDesde" />
      </div>
      <div className={DashBoardStyle.item_filter} >
        <label htmlFor="fechaHasta">Fecha Hasta</label>
        <input className={DashBoardStyle.module_filter_date} type="text" id="fechaHasta" name="fechaHasta" />
      </div>
      <div className={DashBoardStyle.item_filter}>
        <input value="Buscar" type="submit" />
      </div>
    </div>

    <div className={DashBoardStyle.module_table_new}>
      <table className={DashBoardStyle.table_normal}>
        <thead>
          <tr>
            <th>Acciones</th>
            <th>Nº Cotización</th>
            <th>Ejecutivo</th>
            <th>Dibujante</th>
            <th>Direccion</th>
            <th>Total</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <select required>
                <option value="">Seleccione</option>
                <option value="1">Descripción</option>
                <option value="1">Generar PDF</option>
                <option value="1">Resumen</option>
              </select>
            </td>
            <td>LC - 1000</td>
            <td>María Perez Zapata</td>
            <td>Miguel Pinto Gutierrez</td>
            <td>Santiago Centro lejos</td>
            <td>5.000</td>
            <td>Penidente</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className={DashBoardStyle.module_view_more}>
      <button> Ver Más </button>
    </div>
  </div>
);

export default ListCotizacionComponent;
