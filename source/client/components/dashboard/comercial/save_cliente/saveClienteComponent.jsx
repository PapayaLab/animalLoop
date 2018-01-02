import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

/* Component */
import Title from './title';

/* Style */
import DashBoardStyle from '../../../../../../public/dashboard.scss';

class SaveClienteComponent extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddContact = this.handleAddContact.bind(this);
    this.handleRemoveContact = this.handleRemoveContact.bind(this);
    this.changeContact = this.changeContact.bind(this);

    this.nodesContactNombre = new Map();
    this.nodesContactApellido = new Map();
    this.nodesContactMail = new Map();
    this.nodesContactTelefono = new Map();
  }
  componentWillMount() {
    this.props.actions.resetState();
  }
  async handleSubmit(event) {
    event.preventDefault();
    const contacto = [];
    let obj;
    const contactoNombre = Array.from(this.nodesContactNombre.values());
    const contactoApellido = Array.from(this.nodesContactApellido.values());
    const contactoMail = Array.from(this.nodesContactMail.values());
    const contactoTelefono = Array.from(this.nodesContactTelefono.values());
    contactoNombre.map((text, i) => {
      if (text) {
        obj = {
          nombre: text.value,
          apellido: contactoApellido[i].value,
          mail: contactoMail[i].value,
          telefono: contactoTelefono[i].value,
        };
        contacto.push(obj);
      }
      return contacto;
    });

    const client = {
      rut_cliente: this.rutInput.value,
      cliente: this.clienteInput.value,
      contacto,
      razon_social: this.razonInput.value,
      giro: this.giroInput.value,
      rubro: this.rubroInput.value,
      numero_empleado: this.empleadoInput.value,
      tipo_cliente: this.tipoClienteInput.value,
      mercado: this.mercadoInput.value,
      empresa: this.empresaInput.value,
      sucursal: this.sucursalInput.value,
      director_proyecto: this.directorInput.value,
      cliente_activo: this.activoInput.value,
      facturacion_electronica: this.facturacionInput.value,
      mail_facturacion: this.mailFacturacionInput.value,
      forma_pago: this.formaPagoInput.value,
      contacto_proveedores: this.contactoProveedoresInput.value,
      telefono_proveedores: this.telefonoProveedoresInput.value,
      mail_proveedores: this.mailProveedoresInput.value,
      medio_pago: this.medioPagoInput.value,
      direccion_pago: this.direccionPagoInput.value,
      banco_cliente: this.bancoInput.value,
    };

    await this.props.actions.saveClient(client);
    this.props.history.push("/dashboard/listCliente"); /* Podemos enviar el state como segundo parametro */
  }

  handleAddContact(event) {
    event.preventDefault();
    this.props.actions.addContact();
  }

  handleRemoveContact(event) {
    event.preventDefault();
    this.props.actions.removeContact();
  }
  changeContact(e) {
    this.props.actions.changeContact(e.target.value);
  }

  render() {
    return (
      <div className={DashBoardStyle.main}>
        <Title />
        <form onSubmit={this.handleSubmit}>
          <div className={DashBoardStyle.module_form}>
            <div className={`${DashBoardStyle.item_form} ${DashBoardStyle.title}`}>
              <h4>Datos principales Clientes</h4>
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="rut">Rut Cliente</label>
              <input type="text" required id="rut" name="rut" ref={node => this.rutInput = node} />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="cliente">Cliente</label>
              <input type="text" required  id="cliente" name="cliente" ref={node => this.clienteInput = node} />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="razon">Razón Social</label>
              <input type="text" id="razon" name="razon" ref={node => this.razonInput = node} />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="giro">Giro</label>
              <input type="text" id="giro" name="giro" ref={node => this.giroInput = node} />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="rubro">Rubro</label>
              <input type="text" id="rubro" name="rubro" ref={node => this.rubroInput = node} />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="numeroEmpleados">Número Empleados</label>
              <input type="number" id="numeroEmpleados" name="numeroEmpleados" ref={node => this.empleadoInput = node} />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="tipoCliente">Tipo Cliente</label>
              <select id="tipoCliente" name="tipoCliente" ref={node => this.tipoClienteInput = node}>
                <option value="">Seleccioné</option>
                {
                  this.props.tipoCliente.map((text, i) => {
                    return <option key={i} value={text}>{text}</option>
                  })
                }
              </select>
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="mercado">Mercado</label>
              <select id="mercado" name="mercado" ref={node => this.mercadoInput = node}>
                <option value="">Seleccioné</option>              
                {
                  this.props.mercado.map((text, i) => {
                    return <option key={i} value={text}>{text}</option>
                  })
                }
              </select>
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="empresa">Empresa</label>
              <select id="empresa" name="empresa" ref={node => this.empresaInput = node}>
                <option value="">Seleccioné</option>
                {
                  this.props.empresa.map((text, i) => {
                    return <option key={i} value={text}>{text}</option>
                  })
                }
              </select>
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="sucursal">Sucursal</label>
              <select id="sucursal" name="sucursal" ref={node => this.sucursalInput = node}>
                <option value="">Seleccioné</option>
                {
                  this.props.sucursal.map((text, i) => {
                    return <option key={i} value={text}>{text}</option>
                  })
                }
              </select>
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="director">Director Proyecto</label>
              <input type="text" id="director" name="director" ref={node => this.directorInput = node} />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="clienteActivo">Cliente Activo</label>
              <select id="clienteActivo" name="clienteActivo" ref={node => this.activoInput = node}>
                <option value="">Seleccioné</option>
                {
                  this.props.clienteActivo.map((text, i) => {
                    return <option key={i} value={text}>{text}</option>
                  })
                }
              </select>
            </div>
          </div>

          <div className={DashBoardStyle.module_add_row}>
            <label htmlFor="btnRow"> Cantidad Contactos: </label>
            <button onClick={this.handleRemoveContact}> - </button>
            <input type="number" id="btnRow" value = {this.props.contacto} onChange = {this.changeContact} />
            <button onClick={this.handleAddContact}> + </button>
          </div>
          {
          _.times( this.props.contacto, (i) => {
            return (
                <div key={i} className={DashBoardStyle.module_form} >
                  <div className={`${DashBoardStyle.item_form} ${DashBoardStyle.title}`}>
                    <h4>Contacto Cliente</h4>
                  </div>

                  <div className={DashBoardStyle.item_form}>
                    <label htmlFor="nombreContacto">Nombre Contacto</label>
                    <input type="text" id="nombreContacto" name="nombreContacto" ref={node => this.nodesContactNombre.set(i, node)} />
                  </div>

                  <div className={DashBoardStyle.item_form}>
                    <label htmlFor="apellidoContacto">Apellido Contacto</label>
                    <input type="text" id="apellidoContacto" name="apellidoContacto" ref={node => this.nodesContactApellido.set(i, node)} />
                  </div>

                  <div className={DashBoardStyle.item_form}>
                    <label htmlFor="mailContacto">Mail Contacto</label>
                    <input type="text" id="mailContacto" name="mailContacto" ref={node => this.nodesContactMail.set(i, node)} />
                  </div>

                  <div className={DashBoardStyle.item_form}>
                    <label htmlFor="telefonoContacto">Telefono Contacto</label>
                    <input type="text" id="telefonoContacto" name="telefonoContacto"ref={node => this.nodesContactTelefono.set(i, node)} />
                  </div>
                </div>);
            })
          }

          <div className={DashBoardStyle.module_form}>
            <div className={`${DashBoardStyle.item_form} ${DashBoardStyle.title}`}>
              <h4>Datos Pago</h4>
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="facturacion">Facturación electronica</label>
              <input type="text" id="facturacion" name="facturacion" ref={node => this.facturacionInput = node} />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="correoFacturacion">Mail Facturación</label>
              <input type="text" id="correoFacturacion" name="correoFacturacion" ref={node => this.mailFacturacionInput = node} />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="FormaPago">Forma De Pago</label>
              <select id="FormaPago" name="FormaPago" ref={node => this.formaPagoInput = node}>
                <option value="Seleccioné">Seleccioné</option>
                {
                  this.props.condicionPago.map((text, i) => {
                    return <option key={i} value={text}>{text}</option>
                  })
                }
              </select>
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="contactoProveedores">Contacto Proveedores</label>
              <input type="text" id="contactoProveedores" name="contactoProveedores" ref={node => this.contactoProveedoresInput = node} />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="telefonoProveedores">Telefono Proveedores</label>
              <input type="text" id="telefonoProveedores" name="telefonoProveedores" ref={node => this.telefonoProveedoresInput = node} />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="mailProveedores">Mail Proveedores</label>
              <input type="text" id="mailProveedores" name="mailProveedores" ref={node => this.mailProveedoresInput = node} />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="medioPago">Medio de Pago</label>
              <select id="medioPago" name="medioPago" ref={node => this.medioPagoInput = node} >
                <option value="Seleccioné">Seleccioné</option>
                {
                  this.props.medioPago.map((text, i) => {
                    return <option key={i} value={text}>{text}</option>
                  })
                }
              </select>
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="direccionPago">Dirección Pago</label>
              <input type="text" id="direccionPago" name="direccionPago" ref={node => this.direccionPagoInput = node} />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="bancoCliente">Banco Cliente</label>
              <select id="bancoCliente" name="bancoCliente" ref={node => this.bancoInput = node} >
                <option value="Seleccioné">Seleccioné</option>
                {
                  this.props.banco.map((text, i) => {
                    return <option key={i} value={text}>{text}</option>
                  })
                }
              </select>
            </div>
          </div>

          <div className={`${DashBoardStyle.module_form} ${DashBoardStyle.button}`}>
            <div className={`${DashBoardStyle.item_form} ${DashBoardStyle.button}`}>
              <input type="submit" value="Ingresar" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

SaveClienteComponent.propTypes = {
  contacto: PropTypes.number.isRequired,
  tipoCliente: PropTypes.arrayOf(PropTypes.string).isRequired,
  mercado: PropTypes.arrayOf(PropTypes.string).isRequired,
  empresa: PropTypes.arrayOf(PropTypes.string).isRequired,
  sucursal: PropTypes.arrayOf(PropTypes.string).isRequired,
  clienteActivo: PropTypes.arrayOf(PropTypes.string).isRequired,
  condicionPago: PropTypes.arrayOf(PropTypes.string).isRequired,
  medioPago: PropTypes.arrayOf(PropTypes.string).isRequired,
  banco: PropTypes.arrayOf(PropTypes.string).isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default SaveClienteComponent;
