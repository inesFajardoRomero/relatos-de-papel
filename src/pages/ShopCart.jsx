import React from 'react';
import { useCart } from '../hooks/useCart';

export function ShopCart() {
    const { cartItems, addItemToCart, removeItemFromCart } = useCart();
    

    const handleAddToCart = () => {
        addItemToCart(exampleProduct);
    };

    const handleRemoveFromCart = (id) => {
        removeItemFromCart(id);
    };

    return (
        <>

            {/* Lista de productos en el carrito */}
            <ul className="list-group list-group-flush">
                {cartItems.map((item) => (
                    <li key={item.id} className="py-3 ps-0 border-bottom list-group-item d-flex align-items-center justify-content-between">
                        {/* Columna izquierda: Imagen del producto */}
                        <div className="d-flex align-items-center">
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="icon-shape icon-xl rounded-3"
                                style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                            />
                            <div className="ms-3">
                                <a className="text-inherit" href="#">
                                    <h6 className="mb-0">{item.title}</h6>
                                </a>
                                <div className="mt-2 small lh-1">
                                    <a
                                        className="text-decoration-none text-inherit"
                                        href="#!"
                                        onClick={() => handleRemoveFromCart(item.id)}
                                    >
                                        <span className="me-1 align-text-bottom">
                                            <img
                                                src="/img/icon/delete.svg"
                                                alt="Delete"
                                                className="icon-shape icon-xs"
                                                style={{ width: '16px', height: '16px' }}  // Ícono de eliminar
                                            />
                                        </span>
                                        <span className="text-muted">Remove</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Columna derecha: Cantidad y precio */}
                        <div className="d-flex align-items-center">
        
                            <input
                                readOnly
                                className="quantity-field form-control-sm text-center"
                                type="number"
                                value="1"
                                name="quantity"
                                style={{
                                    fontSize: '14px', 
                                    padding: '5px', 
                                    width: '60px', 
                                    textAlign: 'center', 
                                    borderRadius: '5px'
                                }}
                            />
                        

                            {/* Precio */}
                            <span className="ms-3 fw-bold">${item.currentPrice.toFixed(2)}</span>

                            {/* Ícono de eliminar a la derecha */}
                            <span className="ms-2">
                                <a
                                    href="#!"
                                    onClick={() => handleRemoveFromCart(item.id)}
                                >
                                    <img
                                        src="/img/icon/delete.svg"
                                        alt="Delete"
                                        className="icon-shape icon-xs"
                                        style={{ width: '16px', height: '16px' }}
                                    />
                                </a>
                            </span>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Botón para añadir un producto al carrito */}
            <div className="text-center mt-4">
                <button onClick={handleAddToCart} className="btn btn-success px-4 py-2">
                    Add Product to Cart
                </button>
            </div>
        </>
    );
}
