import React from 'react';
import { Link } from 'react-router-dom';

/* Style */
import NavStyle from '../../../../public/nav.scss';

const NavComponent = () => (
  <nav className={NavStyle.nav}>
    <div className={NavStyle.nav_user}>
      <div className={NavStyle.nav_user_img} >
        <img alt="test" src="http://via.placeholder.com/50x50" />
      </div>
      <div className={NavStyle.nav_user_text}>
        <ul>
          <li><h2>Cristóbal Maturana</h2></li>
          <li><p className={NavStyle.nav_user_online}>online</p></li>
        </ul>
      </div>
    </div>
    <div className={NavStyle.nav_items}>
      <ul>
        <li className={`${NavStyle.nav_items_active}`}>
          <p className={NavStyle.icon_comercial}>Comercial</p>
          <ul>
            <li><a href="test">Ingreso Toma de información</a></li>
            <li><a href="test">Mueble Especial</a></li>
            <li><a href="test">Listado Toma de Información</a></li>
            <li><a href="test">Listado Cotización</a></li>
            <li><a href="test">Cuadro Proyecto</a></li>
            <li><span>Cliente</span></li>
            <li><Link to="/dashboard/saveCliente">Ingresar Cliente</Link></li>
            <li><Link to="/dashboard/listCliente">Listado Cliente</Link></li>
          </ul>
        </li>
        <li className={`${NavStyle.nav_items_active}`}>
          <p className={`${NavStyle.icon_dam}`}>Dam</p>
          <ul>
            <li><Link to="/dashboard/saveCotizacion">Ingresar Cotización</Link></li>
            <li><Link to="/dashboard/listCotizacion">Listado Cotización</Link></li>
          </ul>
        </li>
        <li className={`${NavStyle.nav_items_active}`}>
          <p className={NavStyle.icon_planificacion}>Planificación</p>
          <ul>
            <li><span>Bodegas</span></li>
            <li><a href="test">Bodega Insumo</a></li>
            <li><a href="test">Bodega Terminado</a></li>
            <li><a href="test">Bodega Importado</a></li>
          </ul>
        </li>
        <li>
          <p className={NavStyle.icon_pruduccion}>Producción</p>
        </li>
        <li className={`${NavStyle.nav_items_active}`}>
          <p className={NavStyle.icon_sillas}>Sillas</p>
          <ul>
            <li><a href="test">Bodega Sillas</a></li>
          </ul>
        </li>
        <li>
          <p className={NavStyle.icon_despacho}>Despacho</p>
        </li>
        <li>
          <p className={NavStyle.icon_instalacion}>Instalación</p>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavComponent;
