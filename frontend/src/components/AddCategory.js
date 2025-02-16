// src/components/AddCategory.js
import React, { useState } from 'react';
import axios from 'axios';

const AddCategory = ({ onCategoryAdded }) => {
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/categories', {
        name: categoryName,
      });
      onCategoryAdded(response.data); // Aktualizujemy listę po dodaniu kategorii
      setCategoryName(''); // Resetujemy formularz
    } catch (error) {
      console.error('Błąd przy dodawaniu kategorii:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="categoryName">Nazwa kategorii:</label>
      <input
        type="text"
        id="categoryName"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        required
      />
      <button type="submit">Dodaj kategorię</button>
    </form>
  );
};

export default AddCategory;
