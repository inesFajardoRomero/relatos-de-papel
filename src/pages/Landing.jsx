import { useEffect, useState } from 'react';
import { useSearch } from '../hooks/useSearch.jsx';
import { NavBar } from "../layout/NavBar.jsx";
import { Carousel } from "../components/Carousel.jsx";
import { Footer } from "../layout/Footer.jsx";
import { Outlet, useLocation } from "react-router";
import { Input } from '../components/Input.jsx';

export function Landing() {
  const [imgCarousel, setImgCarousel] = useState([]);
  const [navbarData, setNavbarData] = useState([]);

  const location = useLocation();
  const hideCarosuelRoutes = ["/landing", "/landing/libros"];
  
  const showCarosuel = hideCarosuelRoutes.includes(location.pathname);
  const { searchQuery, setSearchQuery } = useSearch();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Actualizar la consulta de búsqueda
  };

  useEffect(() => {
    fetch('/Data/CarouselData.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setImgCarousel(data);
      })
      .catch(error => {
        console.error('Error al cargar el JSON:', error);
      });
  }, []);

  return (
    <>
      <NavBar />

      <div className="mt-8 mb-3">
        <div className="container">
          {showCarosuel && (
            <Carousel images={imgCarousel} />
          )}
          <div className="container text-center mt-5 mb-5">
            <div className="row justify-content-md-center">
              <div className="col-12 col-lg-9">
                <form className="w-100">
                  <Input
                    value={searchQuery}
                    handleChange={handleSearchChange}
                    src='/img/icon/search.svg'
                    placeholder="Buscar productos"
                    type="search"
                    alt="Relatos de Papel"
                  />
                </form>
              </div>

            </div>
          </div>
        <Outlet />
      </div>
    </div >
      <Footer />
    </>
  )
}
