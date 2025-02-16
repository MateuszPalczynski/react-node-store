const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Category = require('../models/Category');

// Pobierz wszystkie produkty
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().populate('category');
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Dodaj nowy produkt
router.post('/', async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    category: req.body.categoryId, // Zakładamy, że frontend przesyła ID kategorii
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;