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

// Aktualizuj produkt
router.put('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('category');
    if (!product) {
      return res.status(404).json({ message: 'Produkt nie znaleziony' });
    }

    product.name = req.body.name || product.name;
    product.price = req.body.price || product.price;
    product.category = req.body.categoryId || product.category;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Usuń produkt
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Produkt nie znaleziony' });
    }
    res.json({ message: 'Produkt został usunięty' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;