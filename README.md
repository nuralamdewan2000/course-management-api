# Course Management System

This project is a RESTful API for a Course Management System within a Learning Management System (LMS). It supports functionalities for user authentication, course management (CRUD operations), and progress tracking. The API demonstrates handling databases, securing endpoints, and managing relationships between different entities.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Postman Collection](#postman-collection)


## Features

- **User Authentication**
  - Register and login with JWT authentication
  - Role-based access control (students and teachers)
- **Course Management**
  - Create, read, update, and delete courses (CRUD operations)
- **Progress Tracking**
  - Track progress of users in courses

## Technologies Used

- Node.js
- Express.js
- MySQL
- Sequelize ORM
- JSON Web Tokens (JWT)
- bcrypt for password hashing
- dotenv for environment variables
- CORS

## Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- MySQL

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nuralamdewan2000/course-management-api.git
   cd course-management-api
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up the environment variables:

   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=
   DB_NAME=
   DB_USER=
   DB_PASSWORD=
   DB_HOST=pg-
   DB_PORT=
   JWT_SECRET=
   ```


4. Start the server:

   ```bash
   npm start
   ```

5. Your server should be running on [http://localhost:3000](http://localhost:3000) 

## Environment Variables

The following environment variables are used in this project:

- `PORT`: The port on which the server runs.
- `DB_NAME`: The name of the MySQL database.
- `DB_USER`: The database user.
- `DB_PASSWORD`: The database user's password.
- `DB_HOST`: The database host.
- `DB_PORT`: The database port.
- `JWT_SECRET`: The secret key for JWT authentication.

## API Endpoints

### User Authentication

- `POST /register`: Register a new user (student or teacher).
- `POST /login`: Authenticate a user and provide a token.

### Course Management

- `GET /courses`: Retrieve a list of all courses.
- `GET /courses/:id`: Retrieve details of a specific course.
- `POST /courses`: Create a new course (teachers only).
- `PUT /courses/:id`: Update a course (teachers only).
- `DELETE /courses/:id`: Delete a course (teachers only).

### Progress Tracking

- `GET /users/:id/progress`: Retrieve progress for a specific user.
- `POST /users/:id/progress`: Update progress for a specific user.

## Postman Collection

To test the API, you can use Postman. Here's a collection of requests for Postman:

### Register User

- **Endpoint**: `POST /register`
- **Headers**: 
  - `Content-Type: application/json`
- **Body**:
  ```json
  {
    "username": "JohnDoe",
    "email": "johndoe@example.com",
    "password": "password123",
    "role": "student"
  }
  ```

### Login User

- **Endpoint**: `POST /login`
- **Headers**: 
  - `Content-Type: application/json`
- **Body**:
  ```json
  {
    "email": "johndoe@example.com",
    "password": "password123"
  }
  ```

### Get All Courses

- **Endpoint**: `GET /courses`
- **Headers**: 
  - `Authorization:  <your_token>`

### Get Course by ID

- **Endpoint**: `GET /courses/:id`
- **Headers**: 
  - `Authorization:  <your_token>`

### Create Course

- **Endpoint**: `POST /courses`
- **Headers**: 
  - `Content-Type: application/json`
  - `Authorization:  <your_token>`
- **Body**:
  ```json
  {
    "name": "New Course",
    "description": "Course Description",
    "teacherId": 1
  }
  ```

### Update Course

- **Endpoint**: `PUT /courses/:id`
- **Headers**: 
  - `Content-Type: application/json`
  - `Authorization:  <your_token>`
- **Body**:
  ```json
  {
    "name": "Updated Course",
    "description": "Updated Description"
  }
  ```

### Delete Course

- **Endpoint**: `DELETE /courses/:id`
- **Headers**: 
  - `Authorization:  <your_token>`

### Get User Progress

- **Endpoint**: `GET /users/:id/progress`
- **Headers**: 
  - `Authorization:  <your_token>`

### Update User Progress

- **Endpoint**: `POST /users/:id/progress`
- **Headers**: 
  - `Content-Type: application/json`
  - `Authorization:  <your_token>`
- **Body**:
  ```json
  {
    "courseId": 1,
    "completedLessons": 5
  }
  ```
