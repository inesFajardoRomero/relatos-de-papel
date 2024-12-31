import {Navigate, Route, Routes} from "react-router";
import App from "../App.jsx";
import {Libros} from "../pages/Libros.jsx";
import {ShopCheckout} from "../pages/CarritoCompras/ShopCheckout.jsx";

export function RouteLanding() {
    return (
        <Routes>

            <Route path="/landing" element={<App />} >
                <Route index element={<Navigate to="libros" />} />
                <Route path="libros" element={<Libros />} />
                <Route path="carrito-compras">
                    <Route path="pago" element={<ShopCheckout />} />

                </Route>
            </Route>
        </Routes>
    );
}
