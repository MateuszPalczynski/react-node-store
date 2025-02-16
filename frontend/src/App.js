// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddCategory from './components/AddCategory';
import AddProduct from './components/AddProduct';
import './App.css';  // Importujemy plik CSS

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Błąd przy pobieraniu kategorii:', error);
      }
    };
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Błąd przy pobieraniu produktów:', error);
      }
    };

    fetchCategories();
    fetchProducts();
  }, []);

  const handleCategoryAdded = (newCategory) => {
    setCategories([...categories, newCategory]);
  };

  const handleProductAdded = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleCategoryDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/categories/${id}`);
      setCategories(categories.filter((category) => category._id !== id));
    } catch (error) {
      console.error('Błąd przy usuwaniu kategorii:', error);
    }
  };

  const handleProductDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error('Błąd przy usuwaniu produktu:', error);
    }
  };

  return (
    <div className="App">
      <h1>Sklep</h1>

      <h2>Kategorie</h2>
      <AddCategory onCategoryAdded={handleCategoryAdded} />
      <ul>
        {categories.map((category) => (
          <li key={category._id}>
            {category.name} 
            <button onClick={() => handleCategoryDelete(category._id)}>Usuń</button>
          </li>
        ))}
      </ul>
      
      <h2>Produkty</h2>
      <AddProduct onProductAdded={handleProductAdded} />
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - {product.price} zł - {product.category.name}
            <button onClick={() => handleProductDelete(product._id)}>Usuń</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
