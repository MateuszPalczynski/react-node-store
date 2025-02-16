import React, { useEffect, useState } from 'react';
import api from '../api';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
      } catch (err) {
        console.error('Błąd podczas ładowania produktów:', err);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      console.log('Usuwanie produktu o ID:', productId);
      await api.delete(`/products/${productId}`);
      
      // Po usunięciu produktu, ponownie pobieramy listę produktów
      const response = await api.get('/products');
      setProducts(response.data); // Zaktualizuj stan na podstawie nowej listy
      console.log('Zaktualizowana lista produktów:', response.data);
    } catch (err) {
      console.error('Błąd podczas usuwania produktu:', err);
    }
  };

  return (
    <div>
      <h2>Produkty</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - {product.price} zł
            {/* Dodajemy przycisk do usuwania */}
            <button onClick={() => handleDelete(product._id)}>Usuń</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
