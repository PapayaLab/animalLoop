import React from 'react';
import { Route, Link, Switch} from 'react-router-dom';

/* Style */
import DashBoardStyle from '../../../../../../public/dashboard.scss';

const SummaryCotizacionComponent = props => (
  	<div className={DashBoardStyle.main}>
        <div className={DashBoardStyle.title}>
            <h3>Resumen cotización</h3>
        </div>
        <div className={DashBoardStyle.module_table_new}>
            <table className={DashBoardStyle.table_normal}>
                <tbody className={DashBoardStyle.td25pc}>
                    <tr className={DashBoardStyle.row_no_border}>
                        <th >Cliente:</th>
                        <td>Agrosuper</td>
                        <th>Rut:</th>
                        <td>20.000.001-2</td>
                    </tr> 
                    <tr className={DashBoardStyle.row_no_border}>
                        <th>Contacto:</th>
                        <td>Luis Perez</td>
                        <th>Dirección Facturación:</th>
                        <td>Santiago City - Puente Quilin 1102</td>
                    </tr>
                    <tr className={DashBoardStyle.row_no_border}>
                        <th>Telefono:</th>
                        <td>(+56)2356 3333</td>
                        <th>Director de Proyectos:</th>
                        <td>Alejando Pereira Zapata</td>
                    </tr>
                    <tr className={DashBoardStyle.row_no_border}>
                        <th>Condiciones Facturación:</th>
                        <td>50% Anticipo 40% Entrega Material en Obra 10% Conformidad de Proyecto</td>
                        <th>Transporte:</th>
                        <td>Inlcuido dentro R.Metropolitana</td>
                    </tr>
                    <tr className={DashBoardStyle.row_no_border}>
                        <th>Condiciones Pago:</th>
                        <td>Contado</td>
                        <th>Tiempo Entrega:</th>
                        <td>22 Días Habiles</td>
                    </tr>
                    <tr className={DashBoardStyle.row_no_border}>
                        <th>Observación:</th>
                        <td>Muchas cosas que decir</td>
                        <th>Validez Cotización:</th>
                        <td>10 días</td>
                    </tr>                 
                </tbody>
            </table> 
        </div>

        <div className={DashBoardStyle.title}>
            <h3>Productos</h3>
        </div>

        <div className={DashBoardStyle.module_summary}>
        	<div className={DashBoardStyle.module_summary_item1}>
        		<h3> Puesto Tipo 1</h3>
        		<img src="http://via.placeholder.com/150x150" />
        	</div>
        	<div className={DashBoardStyle.module_summary_item2}>
        		<div className={DashBoardStyle.module_table_new}>
	        		<table className={DashBoardStyle.table_summary}>
	        			<thead>
		                    <tr>
		                        <th>Descripción</th>
		                        <th>Cantidad</th>
		                        <th>Unitario</th>
		                        <th>Total</th>
		                    </tr>
                		</thead>
		                <tbody className={DashBoardStyle.td25pc}>
		                    <tr>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                    </tr> 
		                    <tr>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                    </tr>
		                    <tr>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                    </tr>
		                    <tr>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                    </tr>
		                    <tr>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                    </tr>                
		                </tbody>
	            	</table>
            	</div>
        	</div>
        </div>

        <div className={DashBoardStyle.module_summary}>
        	<div className={DashBoardStyle.module_summary_item1}>
        		<h3> Puesto Tipo 2</h3>
        		<img src="http://via.placeholder.com/150x150" />
        	</div>
        	<div className={DashBoardStyle.module_summary_item2}>
        		<div className={DashBoardStyle.module_table_new}>
	        		<table className={DashBoardStyle.table_summary}>
	        			<thead>
		                    <tr>
		                        <th>Descripción</th>
		                        <th>Cantidad</th>
		                        <th>Unitario</th>
		                        <th>Total</th>
		                    </tr>
                		</thead>
		                <tbody className={DashBoardStyle.td25pc}>
		                    <tr>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                    </tr> 
		                    <tr>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                    </tr>
		                    <tr>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                    </tr>
		                    <tr>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                    </tr>
		                    <tr>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                    </tr>                
		                </tbody>
	            	</table>
            	</div>
        	</div>
        </div>

        <div className={DashBoardStyle.module_summary}>
        	<div className={DashBoardStyle.module_summary_item1}>
        		<h3> Puesto Tipo 3</h3>
        		<img src="http://via.placeholder.com/150x150" />
        	</div>
        	<div className={DashBoardStyle.module_summary_item2}>
        		<div className={DashBoardStyle.module_table_new}>
	        		<table className={DashBoardStyle.table_summary}>
	        			<thead>
		                    <tr>
		                        <th>Descripción</th>
		                        <th>Cantidad</th>
		                        <th>Unitario</th>
		                        <th>Total</th>
		                    </tr>
                		</thead>
		                <tbody className={DashBoardStyle.td25pc}>
		                    <tr>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                    </tr> 
		                    <tr>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                    </tr>
		                    <tr>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                    </tr>
		                    <tr>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                    </tr>
		                    <tr>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                        <td>Agrosuper</td>
		                    </tr>                
		                </tbody>
	            	</table>
            	</div>
        	</div>
        </div>

         <div className={DashBoardStyle.title}>
            <h3>Total</h3>
        </div>

        <div className={DashBoardStyle.module_table_new}>
            <table className={DashBoardStyle.table_normal}>
                <tbody>
                    <tr className={DashBoardStyle.row_no_border}>
                        <th>Total:</th>
                        <td className={DashBoardStyle.td200}>20.000</td>
                    </tr> 
                    <tr className={DashBoardStyle.row_no_border}>
                        <th>IVA</th>
                        <td>19%</td>
                    </tr>  
                    <tr className={DashBoardStyle.row_no_border}>
                        <th>Total Proyecto</th>
                        <td>201.000</td>
                    </tr>               
                </tbody>
            </table> 
        </div>
    </div>
);

export default SummaryCotizacionComponent;
