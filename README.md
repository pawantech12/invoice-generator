# Invoice Generator Web App - MERN Stack

This project is a fully functional **Invoice Generator Web App** built using the **MERN Stack** (MongoDB, Express, React, Node.js). It allows users to generate, view, and manage invoices, providing them with the option to download invoices as PDF files. The app also supports invoice deletion and features a clean, responsive user interface built with **React** and **TailwindCSS**.

## Project Overview

This Invoice Generator Web App allows users to:
- **Create invoices**: Add customer details and invoice information.
- **View invoices**: Display all previously generated invoices in a table.
- **Download as PDF**: Generate and download invoices in PDF format with jsPDF.
- **Delete invoices**: Remove invoices from the system with a simple click.
- **Fully responsive design**: The app is mobile-friendly and looks great on all screen sizes.


## Features

- **Create and Manage Invoices**: Users can easily create and save invoices.
- **PDF Generation**: Invoices can be downloaded as PDF documents for easy sharing and record-keeping.
- **Delete Invoices**: Invoices can be deleted from the system through a confirmation modal.
- **User-Friendly Interface**: Built using **React** and **TailwindCSS** for a clean, modern, and responsive design.
- **Backend API**: The backend is built with **Node.js** and **Express** to handle CRUD operations, and **MongoDB** stores the invoice data.
- **Authentication (Optional)**: User authentication and session management can be integrated for personalized invoice management (this can be added in future iterations).


## Technologies Used

- **Frontend**:
  - React.js
  - TailwindCSS
  - jsPDF (for PDF generation)
  
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (Database)

- **Other**:
  - Axios (for API requests)
  - React Toastify (for notifications)
  - dotenv (for environment variable management)


## Installation

### Prerequisites

Before starting, ensure that you have **Node.js** and **npm** (or **pnpm**) installed. If you don’t have them installed, you can download them from [Node.js official website](https://nodejs.org/).

### Steps to Install

1. Clone this repository:
   ```bash
   git clone https://github.com/pawantech12/invoice-generator.git
   cd invoice-generator
   ```

2. Install the frontend dependencies:
   ```bash
   cd client
   pnpm install
   ```

3. Install the backend dependencies:
   ```bash
   cd server
   pnpm install
   ```

4. Create a `.env` file in the root of the `server` directory and add your MongoDB connection URI:
   ```
   MONGODB_URI=your-mongodb-uri
   PORT=3000
   ```

5. Start the development servers:

   - For the backend (server):
     ```bash
     pnpm start
     ```

   - For the frontend (client):
     ```bash
     pnpm run dev
     ```

The frontend will be accessible at `http://localhost:5173` and the backend at `http://localhost:3000`.


## Usage

1. **Create Invoice**: Fill in customer information, product details, tax, and total, then click "Create Invoice."
2. **Download Invoice as PDF**: Click the PDF icon next to the invoice to download it.
3. **Delete Invoice**: Click the trash icon to delete an invoice. A confirmation modal will appear.


## API Endpoints

- **GET** `/api/invoices/all`: Get a list of all invoices.
- **POST** `/api/invoices`: Create a new invoice.
- **DELETE** `/api/invoices/:id`: Delete an invoice by ID.


## Future Enhancements

- **User Authentication**: Integrate user authentication for managing personal invoices.
- **Search and Filter**: Add features to search and filter invoices based on customer, date, or amount.
- **Invoice History**: Implement an invoice history page for easy access to past invoices.
- **Invoice Editing**: Allow users to edit existing invoices.


## Contributing

We welcome contributions to this project! If you'd like to contribute, please follow these steps:

1. Fork this repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new pull request.



Feel free to fork, clone, or use this project for learning or building your own invoicing app! If you have any questions or suggestions, don't hesitate to open an issue or create a pull request. 🚀
