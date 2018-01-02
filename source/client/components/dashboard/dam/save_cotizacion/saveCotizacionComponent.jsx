import React, { Component } from 'react';
import _ from 'lodash';

/* Style */
import DashBoardStyle from '../../../../../../public/dashboard.scss';

//const SaveCotizacionComponent = props => (

class SaveCotizacionComponent extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit() {
  }

  onChange() {
  }

  render() {
    console.log(this.props);
    return (
  <div className={DashBoardStyle.main}>
    <div className={DashBoardStyle.title}>
      <h3>Ingreso Cotizacion</h3>
    </div>

    <div className={DashBoardStyle.module_form}>
      <div className={`${DashBoardStyle.item_form} ${DashBoardStyle.title}`}>
        <h4>Datos principales</h4>
      </div>

      <div className={DashBoardStyle.item_form}>
        <label>Nº cotización</label>
        <input required type="number" />
      </div>

      <div className={DashBoardStyle.item_form}>
        <label>Proyecto</label>
        <input required type="text" />
      </div>

      <div className={DashBoardStyle.item_form}>
        <label>Fecha Realización</label>
        <input className={DashBoardStyle.module_form_date} type="text" />
      </div>

      <div className={DashBoardStyle.item_form}>
        <label>Cliente (Razon social)</label>
        <input required type="text" />
      </div>

      <div className={DashBoardStyle.item_form}>
        <label>Giro</label>
        <input required type="text" />
      </div>

      <div className={DashBoardStyle.item_form}>
        <label>Rut</label>
        <input required type="text" />
      </div>

      <div className={DashBoardStyle.item_form}>
        <label>Condición Facturación</label>
        <select required>
        {
          this.props.condicionFacturacion.map( ( text, i ) => {
            return <option key={i} value={i}>{text}</option>
          })
        }
        </select>
      </div>

      <div className={DashBoardStyle.item_form}>
        <label>Condición Pago</label>
        <select required>
          {
            this.props.condicionPago.map( ( text, i ) => {
              return <option key={i} value={i}>{text}</option>
            })
          }
        </select>
      </div>
    </div>

    <div className={DashBoardStyle.module_form}>
      <div className={`${DashBoardStyle.item_form} ${DashBoardStyle.title}`}>
        <h4>Contactos</h4>
      </div>

      <div className={DashBoardStyle.item_form}>
        <label>Contacto Compra</label>
        <input required type="text" />
      </div>

      <div className={DashBoardStyle.item_form}>
        <label>Teléfono Contacto</label>
        <input type="text" />
      </div>

      <div className={DashBoardStyle.item_form}>
        <label>Email Contacto</label>
        <input type="text" />
      </div>

      <div className={DashBoardStyle.item_form}>
        <label>Contacto Pago Proveedores</label>
        <input required  type="text" />
      </div>

      <div className={DashBoardStyle.item_form}>
        <label>Teléfono Contacto</label>
        <input type="text" />
      </div>

      <div className={DashBoardStyle.item_form}>
        <label>Email Contacto</label>
        <input type="text" />
      </div>
    </div>

    <div className={DashBoardStyle.module_form}>
      <div className={`${DashBoardStyle.item_form} ${DashBoardStyle.title}`}>
        <h4>Direcciones</h4>
      </div>

      <div className={DashBoardStyle.item_form}>
        <label>Dirección Facturación</label>
        <input required  type="text" />
      </div>

      <div className={DashBoardStyle.item_form}>
        <label>Dirección Despacho</label>
        <input type="text" />
      </div>

      <div className={DashBoardStyle.item_form}>
        <label>OC Cliente</label>
        <input type="text" value="" />
      </div>

      <div className={DashBoardStyle.item_form}>
        <label>Transporte</label>
        <input required  type="text" />
      </div>

      <div className={DashBoardStyle.item_form}>
        <label>Tiempo de entrega</label>
        <input type="text" />
      </div>

      <div className={DashBoardStyle.item_form}>
        <label>Fecha Instalación</label>
        <input className={DashBoardStyle.module_form_date} type="text" />
      </div>

      <div className={`${DashBoardStyle.item_form} ${DashBoardStyle.ext}`}>
        <label>Observación</label>
        <input type="text" />
      </div>
    </div>

    <div className={DashBoardStyle.module_add_row}>
      <label> Filas: </label>
      <button onClick={
                          () => {
                            this.props.decremento();
                          }
                      } > - </button>
      <input type="number" value={this.props.productos} />
      <button onClick={
                          () => {
                            this.props.incremento();
                          }
                      } > + </button>
    </div>



    <div className={DashBoardStyle.module_table_new}>
      <table className={DashBoardStyle.table_normal}>
        <thead>
          <tr>
            <th>Rocha</th>
            <th>Area</th>
            <th>Linea</th>
            <th>Código</th>
            <th>Descripción</th>
            <th>Acabado</th>
            <th>Cantidad</th>
            <th>Unitario</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>

          {
            _.times( this.props.productos, (i) => {
              return (<tr key={i} >
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td>
              <select required>
                <option value="" />
                <option value="1">50% CO - 50%EN </option>
              </select>
            </td>
            <td><input type="text" /></td>
            <td className={DashBoardStyle.td300}><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
          </tr>);
            })
          }

        </tbody>
        <tfoot>
          <tr>
            <td colSpan="6" />
            <td colSpan="2">Total Proyecto</td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td colSpan="6" />
            <td colSpan="2">
              <select required>
                  {
                    this.props.iva.map( ( text, i ) => {
                      return <option key={i} value={i}>{text}</option>
                    })
                  }
              </select>
            </td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td colSpan="6" />
            <td colSpan="2">Total Integrada</td>
            <td><input type="text" /></td>
          </tr>
        </tfoot>
      </table>
    </div>

    <div className={`${DashBoardStyle.module_form} ${DashBoardStyle.button}`}>
      <div className={`${DashBoardStyle.item_form} ${DashBoardStyle.button}`}>
        <input type="submit" value="Ingresar" />
      </div>
    </div>
  </div>
    );
  }
}

export default SaveCotizacionComponent;
