
import '../../../public/css/pages/carrito-compras.css'
import {Outlet} from "react-router";
import {Link} from "react-router-dom";

export function CarritoCompras (){


    return (
        <div className="row">
            {/*<div className="col-12">
                <div className="d-flex justify-content-between align-items-center d-md-none py-4"><h3
                    className="fs-5 mb-0">Account Setting</h3>
                    <button type="button"
                            className="text-muted d-md-none btn-icon btn-sm ms-3 btn btn-outline-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em"
                             fill="currentColor" className="bi bi-text-indent-left fs-3">
                            <path
                                d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708M7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"></path>
                        </svg>
                    </button>
                </div>
            </div>*/}
            <div className="border-end d-none d-md-block col-lg-3 col-md-4 col-12">
                <div className="pt-10 pe-lg-10 mt-10">
                    <ul className="flex-column nav-pills-dark nav nav-pills">
                        <li className="nav-item">
                            <Link to={"tus-ordenes"} data-rr-ui-event-key="#" className="d-flex align-items-center gap-1 nav-link active" >
                                <img src="/img/icon/bag.svg" alt="Bag" className=""/>
                                Tu Orden
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"ajustes-cuenta"}  data-rr-ui-event-key="#"
                               className="d-flex align-items-center gap-1 nav-link">
                                <img className="me-2" src="/img/icon/settings.svg" alt="Settings" />
                                Configuración
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a data-rr-ui-event-key="#"
                               className="d-flex align-items-center gap-1 nav-link" href="#">
                                <img className="me-2" src="/img/icon/address.svg" alt="address" />
                                Dirección
                            </a>
                        </li>
                        <li className="nav-item">
                            <a data-rr-ui-event-key="#" className="d-flex align-items-center gap-1 nav-link" href="#">
                                Método de Pago
                            </a>
                        </li>
                        <li className="nav-item">
                            <a data-rr-ui-event-key="#"
                               className="d-flex align-items-center gap-1 nav-link"
                               href="#">
                                <img className="me-2" src="/img/icon/notification.svg" alt="Settings"/>
                                Notification
                            </a>
                        </li>
                        <li className="nav-item">
                        <hr/>
                        </li>
                        <li className="nav-item">
                            <a href="/public" data-rr-ui-event-key="/"
                               className="d-flex align-items-center gap-1 nav-link">
                                <img className="me-2" src="/img/icon/logout.svg" alt="Settings"/>
                                Cerrar Sesión
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-9 col-md-8 col-12">
                <Outlet/>
            </div>
        </div>
    )
}