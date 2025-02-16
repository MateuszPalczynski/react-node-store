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

  return (
    <div>
      <h2>Produkty</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - {product.price} zł
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
