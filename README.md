
# Book Store Web App

Welcome to the Book Store Web App! This project is a full-stack web application for managing a collection of books. It has a front-end built with React and a back-end using Node.js. The app allows users to view, add, edit, and delete books, demonstrating CRUD (Create, Read, Update, Delete) operations.

## Front-End Dependencies

Here are the main front-end dependencies used in this project:

- **Axios**: A popular HTTP client for making HTTP requests.
- **Notistack**: A React library for managing notifications and snackbars.
- **React**: A JavaScript library for building user interfaces.
- **React-DOM**: Provides DOM-specific methods for React.
- **React-Icons**: A comprehensive library of icons for React projects.
- **React-Router-Dom**: A library for client-side routing in React applications.

### Why Notistack?

Notistack is a versatile library for creating and managing snackbars in React applications. Snackbars are useful for providing user feedback and notifications, such as successful CRUD operations or error messages. Here's why Notistack is great:

- **Customization**: Notistack allows you to customize the appearance and behavior of snackbars, including position, auto-hide duration, and more.
- **Stacked Notifications**: It can stack multiple snackbars, which is useful in busy applications where multiple events may trigger notifications.
- **Simple API**: The library provides a straightforward API for showing and dismissing snackbars, making it easy to integrate into React components.

### React Component Structure

The front-end is structured with React, using React Router for navigation and Notistack for notifications. Here's the `index.js` setup, where Notistack is used:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </BrowserRouter>
);
```

The main application component (`App.jsx`) contains the routing logic and other components representing different parts of the application.

## Back-End Structure

The back-end is built with Node.js and follows a modular structure for improved maintainability. Here's how it's organized:

- **Routes**: Routes are separated into distinct files for each resource or feature, keeping the routing logic clean and manageable.
- **Controllers**: Controllers contain the logic for handling CRUD operations and other server-side functionalities.
- **Models**: Models represent the data structure and are used to interact with the database.

### CRUD Operations

The Book Store Web App supports basic CRUD operations, allowing users to create, read, update, and delete books. Here's a brief overview of the operations:

- **Create**: Allows users to add new books to the collection.
- **Read**: Displays a list of all books with detailed information.
- **Update**: Lets users edit existing books.
- **Delete**: Permits users to delete books they no longer need.

The back-end communicates with the front-end using RESTful APIs, with Axios handling the HTTP requests from the front-end.

## Conclusion

This Book Store Web App demonstrates a simple but functional application with front-end and back-end components. With React and Notistack, the user interface provides a smooth and interactive experience. The back-end structure ensures clean separation of concerns and efficient handling of CRUD operations. 

Feel free to clone this repository, explore the code, and make any contributions or suggestions to improve the project!

