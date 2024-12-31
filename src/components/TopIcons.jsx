import { Link, NavLink } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useWishlist } from "../hooks/useWishlist";
import { ShopCart } from "../pages/CarritoCompras/ShopCart.jsx";
import { useState } from "react";
import OffCanvas from "./OffCanvas";

export function TopIcons() {
    const { cartItems } = useCart();
    const { wishlistItems } = useWishlist();
    const [ isOpen, setIsOpen ] = useState(false); 

    const handleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="list-inline">
                {["heart", "user"].map((icon, index) => (
                    <div key={index} role="button" className="me-4 text-muted position-relative list-inline-item">
                        <img style={{ width: "100%" }} src={`/img/icon/${icon}.svg`} alt={icon} />
                        {icon === "heart" && <span className="custom-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">{wishlistItems.length}
                        </span>}
                    </div>
                ))}
                <a onClick={() => handleIsOpen()} role="button" className="me-4 me-lg-0 text-muted position-relative list-inline-item">
                    <img src="/img/icon/bag.svg" alt="Bag" />
                    <span className="custom-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">{cartItems.length}</span>
                </a>
            </div>
            <OffCanvas
                offcanvasTitle="Carrito de Compras"
                offcanvasDescription = "Location in 382480"
                isOpen = {isOpen}
                setIsOpen= {setIsOpen}
            >
                <ShopCart />
            </OffCanvas>

        </>



    );
}