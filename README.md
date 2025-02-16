# Simple Store – React & Node.js  

It is a simple web application for managing products and categories in the store. It allows you to:
- **Adding** and deleting categories
- **Adding** and deleting products
- **Viewing** the list of categories and products

## Technologies  

- **Frontend:** React.js
- **Backend:** Node.js + Express  
- **Databases:** MongoDB
- **Communication** Axios

## Installation

### 1. Run the backend  

```sh  
cd backend
npm install
npm start
```

### 1. Run the frontend 

```sh  
cd frontend
npm install
npm start
```
The application should be available at: http://localhost:3000/

## API Endpoints

- **GET /api/products:** Retrieves a list of products
- **POST /api/products:** Adds a new product  
- **DELETE /api/products/:id:** Deletes a product
- **GET /api/categories:** Retrieves list of categories
- **POST /api/categories:** Adds a new category  
- **DELETE /api/categories/:id:** Deletes a category
