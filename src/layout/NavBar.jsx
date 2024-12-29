import { Menu } from './Menu.jsx';
import {Input} from '../components/Input.jsx';
import '../../public/css/layout/navbar.css';
import {Link, NavLink} from "react-router-dom";

export function NavBar() {
    return (
        <>
            <div className="border-bottom">
                <div className="bg-light py-1">
                    <div className="container">
                        <div className="row">
                            <div className="text-center text-md-start col-md-6 col-12">
                                <span className="fontMenu"> Ofertas de gran valor: ahorre más con cupones</span>
                            </div>
                            <div className="text-end d-none d-md-block col">
                                <div className="selectBox dropdown fontMenu">
                                    <a aria-expanded="false" role="button" className="dropdown-toggle nav-link" data-bs-toggle="dropdown" tabIndex="0" href="#">
                                        <img src="/img/traslate/spanish.svg" alt="Spanish" className="me-2"/>
                                        Español
                                    </a>
                                    <div aria-labelledby="" data-bs-popper="static"
                                         className="dropdown-menu dropdown-menu-none fontMenu">
                                        <a data-rr-ui-dropdown-item="" className="w-100 w-lg-auto dropdown-item"
                                           href="/">
                                            <span className="d-flex align-items-center gap-2">
                                                    <img src="/img/traslate/spanish.svg" alt="Spanish"/>
                                                    Español
                                            </span>
                                        </a>
                                        <a data-rr-ui-dropdown-item="" className="w-100 w-lg-auto dropdown-item"
                                           href="/homepage-2">
                                            <span className="d-flex align-items-center gap-2">
                                                <img src="/img/traslate/english.svg" alt="English"/>
                                                Inglés
                                            </span>
                                        </a>
                                        <a data-rr-ui-dropdown-item="" className="w-100 w-lg-auto dropdown-item" href="/homepage-3">
                                            <span className="d-flex align-items-center gap-2">
                                                <img src="/img/traslate/deutsch.svg" alt="Deutsch"/>
                                                Alemán
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-1">
                    <div className="container">
                        <div className="w-100 align-items-center gx-lg-2 gx-0 row">
                            <div className="col-xxl-3 col-lg-4 col-md-6 col-5">
                                <a className="d-none d-lg-block navbar-brand" href="/">
                                    <img src="/img/logo/relatos_papel_logo.svg"
                                         alt="Relatos de Papel"
                                         className="logo"/>
                                </a>
                                <div className="d-flex justify-content-between w-100 d-lg-none">
                                    <a className="navbar-brand" href="/">
                                        <img src="/img/logo/relatos_papel_logo.svg" alt="Relatos de Papel"
                                             className="logo"/>
                                    </a>
                                </div>

                            </div>
                            <div className="d-none d-lg-block col-xxl-5 col-lg-3">
                                <form className="">
                                    <Input src='/img/icon/search.svg' placeholder="Buscar productos" type="search" alt="Relatos de Papel"/>
                                </form>
                            </div>
                            <div className="d-none d-lg-block col-xxl-2 col-lg-2 col-md-2"></div>
                            <div className="text-end col-xxl-2 col-lg-3 col-md-6 col-7">
                                <div className="list-inline">
                                    <div role="button" className="me-4 text-muted position-relative  list-inline-item">
                                        <img style={{ width:"100%"}} src="/img/icon/heart.svg" alt="Heart" className=""/>
                                        <span
                                            className="custom-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">4</span>
                                    </div>
                                    <div role="button" className="text-muted me-4 list-inline-item">
                                        <img src="/img/icon/user.svg" alt="Bag" className=""/>
                                    </div>
                                    <Link to={"/carrito-compras"} role="button" className="me-4 me-lg-0 text-muted position-relative list-inline-item">
                                        <img src="/img/icon/bag.svg" alt="Bag" className=""/>
                                        <span
                                            className="custom-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">5</span>
                                    </Link>
                                    <div role="button" className="d-inline-block d-lg-none list-inline-item">
                                        <button type="button" aria-label="Toggle navigation"
                                                className="navbar-toggler collapsed"></button>
                                    </div>
                                    <div role="button" className="d-inline-block d-lg-none list-inline-item">
                                        <a className="btn" data-bs-toggle="offcanvas"
                                           href="#offcanvasExample" role="button"
                                           aria-controls="offcanvasExample">
                                            <img src="/img/icon/menuList.svg" alt="Bag" className=""/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <nav className="py-0 pb-lg-4 navbar-default navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <div id="navbar-default" className="offcanvas-lg offcanvas-start">
                            <div className="offcanvas-body">
                                <div className="align-items-center undefined navbar-nav">
                                    <Menu/>
                                </div>
                                </div>
                            </div>
                        </div>
                </nav>

                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample"
                     aria-labelledby="offcanvasExampleLabel">
                    <div className="pb-1 offcanvas-header">
                        <a href="/">
                            <img src="/img/logo/relatos_papel_logo.svg" alt="" className="logoCanvas"/>
                        </a>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="d-block d-lg-none mb-4">
                            <form className="">
                                <Input src='/img/icon/search.svg' placeholder="Buscar productos" type="search" alt="Relatos de Papel"/>
                            </form>
                        </div>
                        <div className="align-items-center undefined navbar-nav">
                            <Menu/>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

