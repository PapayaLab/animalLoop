import React from 'react';
import { Route } from 'react-router-dom';

/* Component */
import Header from '../header/Header';
import Nav from '../nav/Nav';
import Home from './home/Home';

/* Cliente */
import SaveTomaDeInformacion from './comercial/save_toma_de_informacion/saveTomaDeInformacion';
import SaveCliente from './comercial/save_cliente/saveCliente';
import ListCliente from './comercial/list_cliente/listCliente';
import UpdateCliente from './comercial/update_cliente/UpdateCliente';

/* Dam */
import SaveCotizacion from './dam/save_cotizacion/saveCotizacion';
import ListCotizacion from './dam/list_cotizacion/listCotizacion';
import SummaryCotizacion from './dam/summary_cotizacion/summaryCotizacion';
import UpdateCotizacion from './dam/update_cotizacion/updateCotizacion';

const Dashboard = props => (
  <main>
    <Header />
    <Nav />
    <Route exact path={props.match.path} component={Home} />
    <Route path={`${props.match.path}/SaveCliente`} component={SaveCliente} />
    <Route path={`${props.match.path}/ListCliente`} component={ListCliente} />
    <Route path={`${props.match.path}/UpdateCliente/:clientId`} component={UpdateCliente} />
    <Route path={`${props.match.path}/SaveTomaDeInformacion`} component={SaveTomaDeInformacion} />
    <Route path={`${props.match.path}/SaveCotizacion`} component={SaveCotizacion} />
    <Route path={`${props.match.path}/ListCotizacion`} component={ListCotizacion} />
    <Route path={`${props.match.path}/SummaryCotizacion`} component={SummaryCotizacion} />
    <Route path={`${props.match.path}/UpdateCotizacion`} component={UpdateCotizacion} />
  </main>
);

export default Dashboard;
