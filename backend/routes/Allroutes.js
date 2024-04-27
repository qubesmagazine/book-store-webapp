const express = require('express');
const { GetAllBooks, PostBook, GetOneBook, updateBook, deleteBook } = require('../controllers/BookControllers');
const routes = express.Router()



routes.get('/', GetAllBooks);

routes.post("/", PostBook)

routes.get("/:id", GetOneBook)

routes.put("/:id", updateBook)

routes.delete("/:id", deleteBook)

module.exports = routes