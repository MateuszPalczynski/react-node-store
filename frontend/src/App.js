import React from 'react';
import './App.css';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <h1>Sklep</h1>
      <CategoryList />
      <ProductList />
    </div>
  );
}

export default App;
