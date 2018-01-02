import React from 'react';
import { Route, Link, Switch} from 'react-router-dom';

/* Style */
import DashBoardStyle from '../../../../../../public/dashboard.scss';

const SaveTomaDeInformacionComponent = props => (
  	<div className={DashBoardStyle.main}>
        <div className={DashBoardStyle.title}>
            <h3>Ingreso toma de información</h3>
        </div>

        <div className={DashBoardStyle.module_form}>
            <div className={`${DashBoardStyle.item_form} ${DashBoardStyle.title}`}>
                <h4>Principal</h4>
            </div>

            <div className={DashBoardStyle.item_form}>
                <label>Nº Toma de información</label>
                <input required  type="number"  />
            </div>

            <div className={DashBoardStyle.item_form}>
                <label>Proyecto</label>
                <input required  type="text"  />
            </div>

            <div className={DashBoardStyle.item_form}>
                <label>Razón social</label>
                <input required type="text" />
            </div>

            <div className={DashBoardStyle.item_form}>
                <label>Contacto</label>
                <input required  type="text" />
            </div>

            <div className={DashBoardStyle.item_form}>
                <label>Email Contacto</label>
                <input required  type="text" />
            </div>

            <div className={DashBoardStyle.item_form}>
                <label>Dirección Factura</label>
                <input required  type="text" />
            </div>

            <div className={DashBoardStyle.item_form}>
                <label>Dirección Entrega</label>
                <input type="text" />
            </div>

            <div className={DashBoardStyle.item_form}>
                <label>Nº de Puesto</label>
                <input type="text" />
            </div>

            <div className={DashBoardStyle.item_form}>
                <label>Fecha</label>
                <input className={DashBoardStyle.module_form_date} type="text" />
            </div>

            <div className={DashBoardStyle.item_form}>
                <label>Fecha Entrega Probable cliente</label>
                <input className={DashBoardStyle.module_form_date} type="text" />
            </div>

        </div>
    </div>
);

export default SaveTomaDeInformacionComponent;
