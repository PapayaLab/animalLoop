import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

/* Component */
import Title from './title';

/* Style */
import DashBoardStyle from '../../../../../../public/dashboard.scss';

class UpdateClienteComponent extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddContact = this.handleAddContact.bind(this);
    this.handleRemoveContact = this.handleRemoveContact.bind(this);
    this.changeContact = this.changeContact.bind(this);
    this.changeForm = this.changeForm.bind(this);

    this.nodesContactNombre = new Map();
    this.nodesContactApellido = new Map();
    this.nodesContactMail = new Map();
    this.nodesContactTelefono = new Map();
  }
  componentWillMount() {
    this.props.actions.fetchClient(this.props.match.params.clientId);
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

    await this.props.actions.updateClient(client,this.props.match.params.clientId);
    this.props.history.push("/dashboard/listCliente"); 
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
  changeForm(name, e, subName) {
    const form = this.props.cliente;

    if (!subName) {
      form[name] = e.target.value;
    } else {
      form[name][subName.num][subName.name] = e.target.value;
    }

    this.props.actions.changeForm(JSON.stringify(form));
  }
  render() {
    return (
      <div className={DashBoardStyle.main}>
        <Title />
        {
          this.props.cliente &&
          <form onSubmit={this.handleSubmit}>
            <div className={DashBoardStyle.module_form}>
              <div className={`${DashBoardStyle.item_form} ${DashBoardStyle.title}`}>
                <h4>Datos principales Clientes</h4>
              </div>

              <div className={DashBoardStyle.item_form}>
                <label htmlFor="rut">Rut Cliente</label>
                <input type="text" required value={this.props.cliente.rut_cliente} onChange={(event) => this.changeForm('rut_cliente', event)} ref={node => this.rutInput = node} />
              </div>

              <div className={DashBoardStyle.item_form}>
                <label htmlFor="cliente">Cliente</label>
                <input type="text" required value={this.props.cliente.cliente} onChange={(event) => this.changeForm('cliente', event)} ref={node => this.clienteInput = node} />
              </div>

              <div className={DashBoardStyle.item_form}>
                <label htmlFor="razon">Razón Social</label>
                <input type="text" value={this.props.cliente.razon_social} onChange={(event) => this.changeForm('razon_social', event)} ref={node => this.razonInput = node} />
              </div>

              <div className={DashBoardStyle.item_form}>
                <label htmlFor="giro">Giro</label>
                <input type="text" value={this.props.cliente.giro} onChange={(event) => this.changeForm('giro', event)} ref={node => this.giroInput = node} />
              </div>

              <div className={DashBoardStyle.item_form}>
                <label htmlFor="rubro">Rubro</label>
                <input type="text" value={this.props.cliente.rubro} onChange={(event) => this.changeForm('rubro', event)} ref={node => this.rubroInput = node} />
              </div>

              <div className={DashBoardStyle.item_form}>
                <label htmlFor="numeroEmpleados">Número Empleados</label>
                <input type="number" value={(this.props.cliente.numero_empleado) ? this.props.cliente.numero_empleado : 0} onChange={(event) => this.changeForm('numero_empleado', event)} ref={node => this.empleadoInput = node} />
              </div>

              <div className={DashBoardStyle.item_form}>
                <label htmlFor="tipoCliente">Tipo Cliente</label>
                <select value={this.props.cliente.tipo_cliente} onChange={(event) => this.changeForm('tipo_cliente', event)} ref={node => this.tipoClienteInput = node}>
                  <option value="">Seleccioné</option>
                  {
                    this.props.tipoCliente.map((text, i) => {
                      return <option key={i} value={text}>{text}</option>;
                    })
                  }
                </select>
              </div>

              <div className={DashBoardStyle.item_form}>
                <label htmlFor="mercado">Mercado</label>
                <select value={this.props.cliente.mercado} onChange={(event) => this.changeForm('mercado', event)} ref={node => this.mercadoInput = node}>
                  <option value="">Seleccioné</option>              
                  {
                    this.props.mercado.map((text, i) => {
                      return <option key={i} value={text}>{text}</option>;
                    })
                  }
                </select>
              </div>

              <div className={DashBoardStyle.item_form}>
                <label htmlFor="empresa">Empresa</label>
                <select value={this.props.cliente.empresa} onChange={(event) => this.changeForm('empresa', event)} ref={node => this.empresaInput = node}>
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
                <select value={this.props.cliente.sucursal} onChange={(event) => this.changeForm('sucursal', event)} ref={node => this.sucursalInput = node}>
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
                <input type="text" value={this.props.cliente.director_proyecto} onChange={(event) => this.changeForm('director_proyecto', event)} ref={node => this.directorInput = node} />
              </div>

              <div className={DashBoardStyle.item_form}>
                <label htmlFor="clienteActivo">Cliente Activo</label>
                <select value={this.props.cliente.cliente_activo} onChange={(event) => this.changeForm('cliente_activo', event)} ref={node => this.activoInput = node}>
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
              <input type="number" id="btnRow" value={this.props.contacto} onChange={this.changeContact} />
              <button onClick={this.handleAddContact}> + </button>
            </div>
            {
              _.times(this.props.contacto, (i) => {
                return (
                  <div key={i} className={DashBoardStyle.module_form} >
                    <div className={`${DashBoardStyle.item_form} ${DashBoardStyle.title}`}>
                      <h4>Contacto Cliente</h4>
                    </div>

                    <div className={DashBoardStyle.item_form}>
                      <label htmlFor="nombreContacto">Nombre Contacto</label>
                      { this.props.cliente.contacto[i] ? (
                        <input type="text" value={this.props.cliente.contacto[i].nombre} onChange={(event) => this.changeForm('contacto', event, { num: i, name: 'nombre' })} ref={node => this.nodesContactNombre.set(i, node)} />
                      ) : (
                        <input type="text" data-num={i} data-name="nombre" name="contacto" ref={node => this.nodesContactNombre.set(i, node)} />
                      )}
                    </div>

                    <div className={DashBoardStyle.item_form}>
                      <label htmlFor="apellidoContacto">Apellido Contacto</label>
                      { this.props.cliente.contacto[i] ? (
                        <input type="text" value={this.props.cliente.contacto[i].apellido} onChange={(event) => this.changeForm('contacto', event, { num: i, name: 'apellido' })} ref={node => this.nodesContactApellido.set(i, node)} />
                      ) : (
                        <input type="text" id="apellidoContacto" name="apellidoContacto" ref={node => this.nodesContactApellido.set(i, node)} />
                      )}
                    </div>

                    <div className={DashBoardStyle.item_form}>
                      <label htmlFor="mailContacto">Mail Contacto</label>
                      { this.props.cliente.contacto[i] ? (
                        <input type="text" value={this.props.cliente.contacto[i].mail} onChange={(event) => this.changeForm('contacto', event, { num: i, name: 'mail' })} ref={node => this.nodesContactMail.set(i, node)} />
                      ) : (
                        <input type="text" id="mailContacto" name="mailContacto" ref={node => this.nodesContactMail.set(i, node)} />
                      )}
                    </div>

                    <div className={DashBoardStyle.item_form}>
                      <label htmlFor="telefonoContacto">Telefono Contacto</label>
                      { this.props.cliente.contacto[i] ? (
                        <input type="text" value={this.props.cliente.contacto[i].telefono} onChange={(event) => this.changeForm('contacto', event, { num: i, name: 'telefono' })} ref={node => this.nodesContactTelefono.set(i, node)} />
                      ) : (
                        <input type="text" id="telefonoContacto" name="telefonoContacto" ref={node => this.nodesContactTelefono.set(i, node)} />
                      )}
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
                <input type="text" value={this.props.cliente.facturacion_electronica} onChange={(event) => this.changeForm('facturacion_electronica', event)} ref={node => this.facturacionInput = node} />
              </div>

              <div className={DashBoardStyle.item_form}>
                <label htmlFor="correoFacturacion">Mail Facturación</label>
                <input type="text" value={this.props.cliente.mail_facturacion} onChange={(event) => this.changeForm('mail_facturacion', event)} ref={node => this.mailFacturacionInput = node} />
              </div>

              <div className={DashBoardStyle.item_form}>
                <label htmlFor="FormaPago">Forma De Pago</label>
                <select value={this.props.cliente.forma_pago} onChange={(event) => this.changeForm('forma_pago', event)} ref={node => this.formaPagoInput = node}>
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
                <input type="text" value={this.props.cliente.contacto_proveedores} onChange={(event) => this.changeForm('contacto_proveedores', event)} ref={node => this.contactoProveedoresInput = node} />
              </div>

              <div className={DashBoardStyle.item_form}>
                <label htmlFor="telefonoProveedores">Telefono Proveedores</label>
                <input type="text" value={this.props.cliente.telefono_proveedores} onChange={(event) => this.changeForm('telefono_proveedores', event)} ref={node => this.telefonoProveedoresInput = node} />
              </div>

              <div className={DashBoardStyle.item_form}>
                <label htmlFor="mailProveedores">Mail Proveedores</label>
                <input type="text" value={this.props.cliente.mail_proveedores} onChange={(event) => this.changeForm('mail_proveedores', event)} ref={node => this.mailProveedoresInput = node} />
              </div>

              <div className={DashBoardStyle.item_form}>
                <label htmlFor="medioPago">Medio de Pago</label>
                <select value={this.props.cliente.medio_pago} onChange={(event) => this.changeForm('medio_pago', event)} ref={node => this.medioPagoInput = node} >
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
                <input type="text" value={this.props.cliente.direccion_pago} onChange={(event) => this.changeForm('direccion_pago', event)} ref={node => this.direccionPagoInput = node} />
              </div>

              <div className={DashBoardStyle.item_form}>
                <label htmlFor="bancoCliente">Banco Cliente</label>
                <select value={this.props.cliente.banco_cliente} onChange={(event) => this.changeForm('banco_cliente', event)} ref={node => this.bancoInput = node} >
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
        }
      </div>
    );
  }
}

UpdateClienteComponent.propTypes = {
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

export default UpdateClienteComponent;
