const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

// Pobierz wszystkie kategorie
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Dodaj nową kategorię
router.post('/', async (req, res) => {
  const category = new Category({
    name: req.body.name,
  });

  try {
    const newCategory = await category.save();
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Aktualizuj kategorię
router.put('/:id', async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Kategoria nie znaleziona' });
    }

    category.name = req.body.name || category.name; // Aktualizuj tylko nazwę

    const updatedCategory = await category.save();
    res.json(updatedCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Usuń kategorię
router.delete('/:id', async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Kategoria nie znaleziona' });
    }
    res.json({ message: 'Kategoria została usunięta' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;