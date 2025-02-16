# Sklep – Aplikacja Webowa

## Opis projektu
Jest to prosta aplikacja webowa do zarządzania produktami i kategoriami w sklepie. Pozwala na:
- Dodawanie i usuwanie kategorii
- Dodawanie i usuwanie produktów
- Przeglądanie listy kategorii i produktów

## Technologie
- **Frontend:** React.js
- **Backend:** Node.js + Express
- **Baza danych:** MongoDB
- **Komunikacja:** Axios

## Instalacja
Aby uruchomić projekt lokalnie, wykonaj poniższe kroki:

### 1. Uruchom backend
```bash
cd backend
npm install
npm start
```

### 2. Uruchom frontend
```bash
cd frontend
npm install
npm start
```

Aplikacja powinna być dostępna pod adresem: `http://localhost:3000/`

## API Endpoints
- `GET /api/products` – Pobiera listę produktów
- `POST /api/products` – Dodaje nowy produkt
- `DELETE /api/products/:id` – Usuwa produkt
- `GET /api/categories` – Pobiera listę kategorii
- `POST /api/categories` – Dodaje nową kategorię
- `DELETE /api/categories/:id` – Usuwa kategorię
