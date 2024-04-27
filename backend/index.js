const express = require('express');
const dotenv = require('dotenv').config(); // Loads environment variables
const mongoose = require('mongoose');
const Routers = require('./routes/Allroutes');
const cors = require('cors');

const app = express();

app.use(cors())

// app.use(cors({
//     origin: 'http://localhost:5000' ,
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],

// }))

const PORT = process.env.PORT || 3000;

// Add body-parsing middleware
app.use(express.json()); // For parsing JSON bodies
app.use(express.urlencoded({ extended: true })); // For parsing URL-encoded data


mongoose
  .connect(process.env.MONGO_URL) // Connection string from environment variable
  .then(() => {
    console.log("Connected to MongoDB")
      
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error); // Error handling for MongoDB connection
  });

  app.use('/api/books', Routers)


  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`); // Corrected console message
  });


