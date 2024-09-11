# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Orders & Products SPA

## Project Overview

**Orders & Products** is a single-page application (SPA) designed to manage orders and associated products. The application provides users with a user-friendly interface to view and manage orders, as well as drill down into the details of the products related to those orders. The interface includes features such as filtering, sorting, and displaying detailed information about orders and products.

## Application Features

### Core Components:

1. **Navigation Menu**: This component provides navigation links to switch between the Orders and Products pages.
2. **TopMenu**: Displays the current date and time, which updates in real-time. Next to the date, a counter shows the number of active application sessions in browsers, powered by WebSocket and Socket.io.
3. **Orders**: This component lists all orders with relevant details, such as order name, number of products, creation dates in two formats, and the total amount in two currencies. Users can click on an order to view its details in a side panel, which can be closed. There is also a delete button for each order, which triggers a confirmation popup.
4. **Products**: This component lists all products with filtering options based on product type. Each product displays fields such as product name, type, warranty dates in different formats, prices in different currencies, and the associated order name.

### Technologies Used:

- **Global State Management**: Implemented using Redux Toolkit.
- **Component-Based Architecture**: The project follows a modular approach with reusable components.
- **Routing**: Managed with React Router for seamless navigation between different pages.
- **Animations**: Transition effects between routes and component switches, implemented using CSS transitions and animation libraries like animate.css.
- **Modern JavaScript (ES6+)**: The project leverages ES6 features such as arrow functions, spread operators, and template strings.
- **WebSocket**: Used to implement a real-time counter for active application sessions using Socket.io.
- **Version Control**: Managed with Git. The complete project is available on GitHub, including a clear Readme.md for installation and setup instructions.

## Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/orders-products-spa.git
   cd orders-products-spa
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Run the Application**:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`.

4. **Build the Application** (for production):
   ```bash
   npm run build
   ```
