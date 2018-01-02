import React from 'react';
import { Route, Link, Switch} from 'react-router-dom';

/* Style */
import DashBoardStyle from '../../../../../public/dashboard.scss';

const HomeComponent = props => (
  	<div className={DashBoardStyle.main}>

  		<div className={DashBoardStyle.title}>
        	<h3>Home Se encuentran los componentes que ocuparamos en el sistema</h3>
        </div>

		<div className={DashBoardStyle.module_filter}>
			<div className={DashBoardStyle.item_filter}>
			    <label>Proveedor</label>
			    <input autoComplete="off" type="text"/>
			</div>
			<div className={DashBoardStyle.item_filter}>
			    <label>Proveedor</label>
			    <input autoComplete="off" type="text"/>
			</div>
			<div className={DashBoardStyle.item_filter} >
              <label>Estado</label>
              <select id="estado" >
                <option value="En Proceso">En Proceso</option>
                <option value="Nulo">Nulo</option>
                <option value="Ok">Ok</option>
              </select>
            </div>
			<div className={DashBoardStyle.item_filter}>
			  <input value="Buscar" type="submit" />
			</div>
		</div>

		<div className={DashBoardStyle.module_form}>
            <div className={`${DashBoardStyle.item_form} ${DashBoardStyle.title}`}>
                <h4>Nuevo cliente</h4>
            </div>

            <div className={DashBoardStyle.item_form}>
                <label>Rut</label>
                <input required  type="text"  />
            </div>

            <div className={DashBoardStyle.item_form}>
                <label>Nombre</label>
                <select required id="formato">
                <option value="">Seleccioné</option>
                <option value="cu">CU</option>
                <option value="tira">Tira</option>
                <option value="placa">Placa</option>
                <option value="empaque">Empaque</option>
                <option value="un">UN</option>
                <option value="ml">ML</option>
                <option value="lamina">Lamina</option>
              </select>
            </div>

            <div className={DashBoardStyle.item_form}>
                <label>Razón social</label>
                <input required type="text" />
            </div>

            <div className={DashBoardStyle.item_form}>
                <label>Giro</label>
                <input required  type="text" />
            </div>

            <div className={DashBoardStyle.item_form}>
                <label>Dirección</label>
                <input type="text" />
            </div>

            <div className={DashBoardStyle.item_form}>
                <label>Contacto</label>
                <input type="text" />
            </div>

            <div className={DashBoardStyle.item_form}>
                <label>Forma de pago</label>
                <input type="text" />
            </div>

            <div className={DashBoardStyle.item_form}>
                <label>Telefono 1</label>
                <input type="text" />
            </div>

            <div className={DashBoardStyle.item_form}>
                <label>Telefono 2</label>
                <input className={DashBoardStyle.module_form_date} type="text" />
            </div>

            <div className={DashBoardStyle.item_form}>
                <label>Mail</label>
                <input type="text" />
            </div>

          </div>

          <div className={`${DashBoardStyle.module_form} ${DashBoardStyle.button}`}>
            <div className={`${DashBoardStyle.item_form} ${DashBoardStyle.button}`}>
                <input type="submit" value="Enviar"/>
            </div>
          </div>

          <div className={DashBoardStyle.module_table_new}>
	          <table className={DashBoardStyle.table_normal}>
	              <thead>
	                <tr>
	                  <th>Herramientas</th>
	                  <th>Proveedor</th>
	                  <th>Rut</th>
	                  <th>Dirección</th>
	                  <th>Comuna</th>
	                  <th>Telefono</th>
	                  <th>Forma de pago</th>
	                  <th>Razón social</th>
	                  <th>Mail</th>
	                  <th>Forma de pago</th>
	                </tr>
	              </thead>
	              <tbody>
	                <tr>
			            <td>Dato 01</td>
			            <td>Dato 02</td>
			            <td>Dato 01</td>
			            <td>Dato 02</td>
                        <td>Dato 02</td>
			            <td className="nr">Dato</td>
			            <td>Dato 01</td>
			            <td>Dato 02</td>
			            <td>Dato 01</td>
			            <td>Dato 02</td>
	        		</tr>  
	            	</tbody>
	            </table> 
            </div>
    </div>
);

export default HomeComponent;
