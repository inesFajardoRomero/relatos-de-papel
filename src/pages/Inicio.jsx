import { useEffect, useState } from 'react';
import {CardBook} from "../components/CardBook.jsx";

export function Inicio() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('../services/LibrosData.json') // Ruta en la carpeta public
            .then((response) => response.json())
            .then((data) => setBooks(data))
            .catch((error) => console.error('Error al cargar el JSON:', error));
    }, []);

    return (
    <div className="g-4 row row-cols-lg-5 row-cols-md-3 row-cols-2">
        {books.map((book, index) => (
            <div className="col" key={index}>
                <CardBook
                    {...books} // Desestructurar las propiedades
                    onAdd={() => console.log(`Añadido al carrito: ${book.title}`)}
                    onView={() => console.log(`Vista previa: ${book.title}`)}
                    onFavorite={() => console.log(`Añadido a favoritos: ${book.title}`)}
                    onCompare={() => console.log(`Añadido a comparar: ${book.title}`)}
                />
            </div>
        ))}
    </div>
)
}
