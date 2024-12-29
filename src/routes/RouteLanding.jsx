import {Navigate, Route, Routes} from "react-router";
import App from "../App.jsx";
import {NovedadesJuvenil} from "../pages/NovedadesJuvenil.jsx";
import {CarritoCompras} from "../pages/CarritoCompras/CarritoCompras.jsx";
import {AjusteCuenta} from "../pages/CarritoCompras/AjusteCuenta.jsx";
import {TusOrdenes} from "../pages/CarritoCompras/TusOrdenes.jsx";
import {Inicio} from "../pages/Inicio.jsx";

export function RouteLanding() {
    return (
        <Routes>
            <Route path="/" element={<App />} >
                <Route index element={<Navigate to="inicio" />} />
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/joven-lector" element={<NovedadesJuvenil />} />
                <Route path="/carrito-compras/" element={<CarritoCompras />} >
                    <Route index element={<Navigate to="tus-ordenes" />} />
                    <Route path="ajustes-cuenta" element={<AjusteCuenta />} />
                    <Route path="tus-ordenes" element={<TusOrdenes />} />
                </Route>
            </Route>
        </Routes>
    )
}
