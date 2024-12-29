import '../../public/css/layout/menu.css';
import { NavLink } from "react-router-dom";

export function Menu() {
    return (
        <>
            <div className="w-100 w-lg-auto nav-item fontMenu">
                <a className="nav-link" tabIndex="0" href="/">
                    Inicio
                </a>
            </div>
            <div className="w-100 w-lg-auto nav-item fontMenu">
                <a role="button" className="nav-link" tabIndex="0" href="#">
                    Novedades
                </a>
            </div>
            <div className="w-100 w-lg-auto nav-item dropdown fontMenu">
                <a aria-expanded="false" role="button" className="dropdown-toggle nav-link" data-bs-toggle="dropdown"
                   tabIndex="0" href="">Jovenes Lectores</a>
                <div aria-labelledby="" data-bs-popper="static" className="dropdown-menu dropdown-menu-none fontMenu">
                    <NavLink to="/joven-lector" data-rr-ui-dropdown-item="" className="w-100 w-lg-auto dropdown-item">Novedades</NavLink>
                    <a data-rr-ui-dropdown-item="" className="w-100 w-lg-auto dropdown-item"
                       href="/homepage-2">Romance</a>
                    <a data-rr-ui-dropdown-item="" className="w-100 w-lg-auto dropdown-item"
                       href="/homepage-3">Misterio</a>
                    <a data-rr-ui-dropdown-item="" className="w-100 w-lg-auto dropdown-item"
                       href="/homepage-4">Clásicos</a>
                    <a data-rr-ui-dropdown-item="" className="w-100 w-lg-auto dropdown-item"
                       href="/homepage-5">Fantasía</a>
                </div>
            </div>
            <div className="w-100 w-lg-auto nav-item dropdown fontMenu">
                <a aria-expanded="false" role="button" className="dropdown-toggle nav-link " data-bs-toggle="dropdown"
                   tabIndex="0" href="#">Infantil</a>
                <div aria-labelledby="" data-bs-popper="static" className="dropdown-menu dropdown-menu-none fontMenu">
                    <a data-rr-ui-dropdown-item="" className="w-100 w-lg-auto dropdown-item" href="/">0-2 años</a>
                    <a data-rr-ui-dropdown-item="" className="w-100 w-lg-auto dropdown-item" href="/homepage-2">3-5
                        años</a>
                    <a data-rr-ui-dropdown-item="" className="w-100 w-lg-auto dropdown-item" href="/homepage-3">6-9
                        años</a>
                    <a data-rr-ui-dropdown-item="" className="w-100 w-lg-auto dropdown-item" href="/homepage-4">10-12
                        años</a>
                </div>
            </div>
            <div className="w-100 w-lg-auto nav-item fontMenu">
                <a data-rr-ui-event-key="/dashboard" className="nav-link" href="/dashboard">Empresarial</a>
            </div>
            <div className="w-100 w-lg-auto nav-item fontMenu">
                <a data-rr-ui-event-key="/dashboard" className="nav-link" href="/dashboard">Más Vendidos</a>
            </div>
            <div className="w-100 w-lg-auto nav-item fontMenu">
                <a data-rr-ui-event-key="/dashboard" className="nav-link" href="/dashboard">Recomendados</a>
            </div>
            <div className="w-100 w-lg-auto nav-item fontMenu">
                <a data-rr-ui-event-key="/dashboard" className="nav-link" href="/dashboard">Contáctenos</a>
            </div>
        </>
    )
}

