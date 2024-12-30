import { Menu } from './Menu.jsx';
import {Input} from '../components/Input.jsx';
import '../../public/css/layout/navbar.css';
import { TopBanner } from '../components/TopBanner.jsx';
import { Logo } from '../components/Logo.jsx';
import { TopIcons } from '../components/TopIcons.jsx';
import { useEffect, useState} from 'react';

export function NavBar() {
    const [navbarData, setNavbarData] = useState({});
  
    useEffect(() => {
      fetch('/Data/NavBarData.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setNavbarData(data);
        })
        .catch(error => {
          console.error('Error al cargar el JSON:', error);
        });
    }, []);

    return (
        <>
            <div className="border-bottom">
                {/* Banner superior */}
                <TopBanner languages = {navbarData.languages}/>

                {/* Contenedor principal */}
                <div className="py-1">
                    <div className="container">
                        <div className="w-100 align-items-center gx-lg-2 gx-0 row">
                            <div className="col-xxl-10 col-lg-9 col-md-6 col-5">
                                <Logo {...navbarData.logo}/>
                            </div>
                            <div className="text-end col-xxl-2 col-lg-3 col-md-6 col-7">
                                <TopIcons />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Menú principal */}
                <nav className="py-0 pb-lg-4 navbar-default navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <div id="navbar-default" className="offcanvas-lg offcanvas-start">
                            <div className="offcanvas-body">
                                <div className="align-items-center undefined navbar-nav">
                                    <Menu />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Offcanvas para dispositivos móviles */}
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="pb-1 offcanvas-header">
                        <Logo />
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="d-block d-lg-none mb-4">
                            <form>
                                <Input src='/img/icon/search.svg' placeholder="Buscar productos" type="search" alt="Relatos de Papel" />
                            </form>
                        </div>
                        <div className="align-items-center undefined navbar-nav">
                            <Menu />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}