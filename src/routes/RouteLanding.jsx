import {Navigate, Route, Routes} from "react-router";
import App from "../App.jsx";
import {NovedadesJuvenil} from "../pages/NovedadesJuvenil.jsx";
import {CarritoCompras} from "../pages/CarritoCompras/CarritoCompras.jsx";
import {AjusteCuenta} from "../pages/CarritoCompras/AjusteCuenta.jsx";
import {TusOrdenes} from "../pages/CarritoCompras/TusOrdenes.jsx";
import {Libros} from "../pages/Libros.jsx";

export function RouteLanding() {
    return (
        <Routes>
            {/* Ruta principal de la aplicación, con el Outlet para rutas anidadas */}
            <Route path="/landing" element={<App />} >
                <Route index element={<Navigate to="libros" />} /> {/* Redirigir a libros dentro de /landing */}
                <Route path="libros" element={<Libros />} /> {/* Aquí ya no debe llevar el prefijo '/' */}
                <Route path="joven-lector" element={<NovedadesJuvenil />} />
                
                {/* Rutas anidadas dentro de /carrito-compras */}
                <Route path="carrito-compras" element={<CarritoCompras />}>
                    <Route index element={<Navigate to="tus-ordenes" />} />
                    <Route path="ajustes-cuenta" element={<AjusteCuenta />} />
                    <Route path="tus-ordenes" element={<TusOrdenes />} />
                </Route>
            </Route>
        </Routes>
    );
}
