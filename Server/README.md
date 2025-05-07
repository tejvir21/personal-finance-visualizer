# Personal Finance Visualizer - Backend Server

This is the backend server for the **Personal Finance Visualizer** application. It provides APIs and services to manage and visualize personal financial data.

## Features

- RESTful APIs for managing financial transactions.
- Data visualization endpoints for financial insights.
- Secure and scalable backend architecture.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- MongoDB (or any other configured database)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/tejvir21/Personal-finance-visualizer.git
    cd Personal-finance-visualizer/Server
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure environment variables:
    Create a `.env` file in the root of the `Server` directory and add the following:
    ```
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    ```

## Usage

1. Start the development server:
    ```bash
    npm run dev
    ```

2. Access the API at `http://localhost:5000`.

## Scripts

- `npm start`: Start the production server.
- `npm run dev`: Start the development server with hot reloading.
- `npm test`: Run tests.

## Contributing

Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions or feedback, please contact [https://tejvir.netlify.app/].
