Here’s an updated `README.md` file that reflects MongoDB usage instead of PostgreSQL:

```markdown
# Teacher Portal Backend

This is the backend server for the Teacher Portal application, built using Node.js and Express.js with MongoDB as the database. It provides RESTful API endpoints for user authentication, student management, and data retrieval. The project also includes middleware for authentication and authorization using Passport.js.

## Table of Contents

- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Logging](#logging)
- [Contribution](#contribution)
- [License](#license)

## Project Overview

The Teacher Portal Backend consists of:

- **User Authentication**: Login and registration functionality using JWT.
- **Student Management**: CRUD operations for managing student records.
- **Database**: MongoDB for data storage.
- **Middleware**: Error handling, validation, and authentication.

## Prerequisites

Before setting up the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [MongoDB](https://www.mongodb.com/) (make sure MongoDB is running)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/teacher-portal-backend.git
cd teacher-portal-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory of the project with the following content:

```env
MONGODB_URI=mongodb://localhost:27017/teacher_portal
SECRET_KEY=your_generated_secret_key_here
PORT=5000
NODE_ENV=development
```

Replace `your_generated_secret_key_here` with a secure key for JWT.

### 4. Set Up MongoDB

Ensure MongoDB is installed and running. You can start MongoDB locally by running:

```bash
mongod
```

### 5. Run the Server

```bash
npm start
```

The server should now be running on `http://localhost:5000`.

## API Endpoints

### Authentication

- **POST /api/auth/login**: Log in and receive a JWT token.
  - **Request Body**: `{ "username": "admin", "password": "admin" }`
  - **Response**: `{ "message": "Login successful", "token": "JWT_TOKEN" }`

- **POST /api/register/register**: Register a new user.
  - **Request Body**: `{ "username": "admin", "password": "admin" }`
  - **Response**: `{ "user": { "username": "admin", "id": "USER_ID" } }`

### Student Management

- **GET /api/students**: Retrieve a list of students.
- **POST /api/students**: Add a new student.
  - **Request Body**: `{ "name": "John Doe", "subject": "Math", "marks": 85 }`
- **PUT /api/students/:id**: Update student details.
  - **Request Body**: `{ "name": "John Doe", "subject": "Math", "marks": 90 }`
- **DELETE /api/students/:id**: Delete a student.

## Error Handling

Errors are handled using middleware and will return a JSON response with an appropriate status code and message. Ensure to check the logs for detailed error information.

## Logging

Logs are managed using the [winston](https://www.npmjs.com/package/winston) logging library. Logs will be written to the console and to a file named `combined.log`.

## Contribution

Feel free to fork the repository and submit pull requests. Please ensure to follow coding standards and include tests with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

### Key Points

1. **Database**: The `.env` file now includes a MongoDB URI.
2. **MongoDB Setup**: Instructions for running MongoDB locally.
3. **API Endpoints**: Examples of how to interact with the RESTful API.
4. **Error Handling and Logging**: Brief overview of how errors and logs are managed.
