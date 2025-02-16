import React, { useEffect, useState } from 'react';
import api from '../api';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get('/categories');
        setCategories(response.data);
      } catch (err) {
        console.error('Błąd podczas ładowania kategorii:', err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <h2>Kategorie</h2>
      <ul>
        {categories.map((category) => (
          <li key={category._id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
