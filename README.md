# Personal Finance Visualizer

## Overview
Personal Finance Visualizer is a full-stack application designed to help users track and visualize their financial data. The project consists of two main components: the **Client** and the **Server**.

---

## Client

### Description
The client is a React-based front-end application that provides an intuitive user interface for managing and visualizing financial data.

### Features
- Interactive charts and graphs for financial insights.
- User-friendly forms for adding and editing transactions.
- Responsive design for mobile and desktop.

### Tech Stack
- **React**: Front-end framework.
- **Fetch**: For API communication.
- **Recharts**: For data visualization.

### Setup Instructions
1. Navigate to the `client` directory:
    ```bash
    cd client
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm start
    ```
4. Open your browser and navigate to `http://localhost:3000`.

---

## Server

### Description
The server is a Node.js and Express-based back-end application that handles API requests, authentication, and database operations.

### Features
- RESTful API for managing financial data.
- Integration with a database for persistent storage.

### Tech Stack
- **Node.js**: Runtime environment.
- **Express**: Web framework.
- **MongoDB**: Database for storing financial data.
- **Mongoose**: ODM for MongoDB.

### Setup Instructions
1. Navigate to the `server` directory:
    ```bash
    cd server
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Set up environment variables:
    - Create a `.env` file in the `server` directory.
    - Add the following variables:
      ```
      PORT=5000
      MONGO_URI=<your-mongodb-connection-string>
      ```
4. Start the server:
    ```bash
    npm start
    ```
5. The server will run on `http://localhost:5000`.

---

## Contribution
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-name
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add feature-name"
    ```
4. Push to your branch:
    ```bash
    git push origin feature-name
    ```
5. Open a pull request.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact
For any questions or feedback, please contact [Tejvir Chauhan] at [https://tejvir.netlify.app/].  