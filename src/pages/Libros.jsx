import { useEffect, useState } from 'react';
import {CardBook} from "../components/CardBook.jsx";
import fetchData from "../services/api.js";
import { useSearch } from '../hooks/useSearch.jsx';
import { useCart } from '../hooks/useCart.jsx';
import { useWishlist } from '../hooks/useWishlist.jsx';

export function Libros() {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const { searchQuery } = useSearch();
    const { addToCart } = useCart();
    const { addToWishlist } = useWishlist();

    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleAddToCart = (book) => {
      addToCart(book);  
    };

    const handleAddToWishlist = (book) => {
      addToWishlist(book); 
    };
    
    useEffect(() => {
        fetchData(
            '/Data/LibrosData.json',
            (data) => setBooks(data),
            (error) => setError(error)
        );
      }, []);

    return (
      <>
      <div className="g-4 row row-cols-lg-5 row-cols-md-3 row-cols-2">
         {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <div className="col" key={index}>
              <CardBook
                {...book}
                onAdd={() => handleAddToCart(book)}
                onView={() => console.log(`Vista previa: ${book.title}`)}
                onFavorite={() => handleAddToWishlist(book)}
                onCompare={() => console.log(`Añadido a comparar: ${book.title}`)}
              />
            </div>
          ))
        ) : (
          <p>No se encontraron libros que coincidan con la búsqueda.</p>
        )}
    </div>
      </>
    )
}
