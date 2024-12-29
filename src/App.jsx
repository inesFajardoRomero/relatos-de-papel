import {NavBar} from "./layout/NavBar.jsx";
import {Carousel} from "./components/Carousel.jsx";
import {Footer} from "./layout/Footer.jsx";
import {Outlet, useLocation} from "react-router";


function App() {
    const location = useLocation();

    const hideCarosuelRoutes = ["/", "/inicio"];

    const showCarosuel = hideCarosuelRoutes.includes(location.pathname);


    return (
        <div>
            <NavBar/>
            <div className="mt-8 mb-3">
                <div className="container">
                    {showCarosuel && (
                        <Carousel images={[
                            { src: '/img/carrusel/32616182_7945315.svg', alt: 'Imagen 1' },
                            { src: '/img/carrusel/38549344_8620843.svg', alt: 'Imagen 2' },
                            { src: '/img/carrusel/32393020_7921353.svg', alt: 'Imagen 3' },
                        ]}/>
                    )}
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default App
