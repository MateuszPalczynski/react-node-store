const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Testowy endpoint
app.get('/', (req, res) => {
  res.send('Serwer działa! 🚀');
});

// Rejestracja routów
const categoriesRouter = require('./routes/categories');
const productsRouter = require('./routes/products'); // Dodaj to
app.use('/api/categories', categoriesRouter);
app.use('/api/products', productsRouter); // Dodaj to

// Uruchom serwer
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});

// Połączenie z bazą danych
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Połączono z MongoDB!'))
  .catch((err) => console.error('Błąd połączenia z MongoDB:', err));
