Role-Based SaaS Billing Portal

Project Overview

This project is a Role-Based SaaS Billing Portal Backend developed using Node.js, Express.js, MongoDB Atlas, JWT Authentication, and bcrypt.

The application allows users to register, log in securely, and access protected routes. Admin users can create and manage billing records, while authentication and authorization are handled using JSON Web Tokens (JWT).

---

Features

Authentication

- User Registration
- User Login
- Password Hashing using bcrypt
- JWT Token Authentication
- Protected Routes

Authorization

- Role-Based Access Control
- Admin Middleware
- Admin-Only Bill Creation

Billing Management

- Create Bills
- View All Bills
- Store Billing Records in MongoDB Atlas

---

Tech Stack

Backend

- Node.js
- Express.js

Database

- MongoDB Atlas
- Mongoose

Security

- bcryptjs
- JSON Web Token (JWT)

Testing

- Postman

---

Project Structure

server/
├── middleware/
│ ├── authMiddleware.js
│ └── adminMiddleware.js
├── models/
│ ├── User.js
│ └── Bill.js
├── routes/
│ ├── authRoutes.js
│ └── billRoutes.js
├── .env
├── server.js
└── package.json

---

API Endpoints

Authentication

Register User

POST /api/auth/register

Login User

POST /api/auth/login

---

Bills

Create Bill (Admin Only)

POST /api/bills/create

View All Bills

GET /api/bills/all

---

Installation

1. Clone the repository

git clone <repository-url>

2. Navigate to server folder

cd server

3. Install dependencies

npm install

4. Create a .env file

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

5. Start the server

node server.js
