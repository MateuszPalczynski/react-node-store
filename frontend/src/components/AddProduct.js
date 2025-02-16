// src/components/AddProduct.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddProduct = ({ onProductAdded }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Błąd przy pobieraniu kategorii:', error);
      }
    };
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/products', {
        name,
        price: parseFloat(price),
        categoryId,
      });
      onProductAdded(response.data); // Aktualizujemy listę po dodaniu produktu
      setName('');
      setPrice('');
      setCategoryId('');
    } catch (error) {
      console.error('Błąd przy dodawaniu produktu:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="productName">Nazwa produktu:</label>
      <input
        type="text"
        id="productName"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label htmlFor="productPrice">Cena:</label>
      <input
        type="number"
        id="productPrice"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <label htmlFor="categorySelect">Kategoria:</label>
      <select
        id="categorySelect"
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
        required
      >
        <option value="">Wybierz kategorię</option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
      <button type="submit">Dodaj produkt</button>
    </form>
  );
};

export default AddProduct;
