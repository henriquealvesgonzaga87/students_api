# API REST Node.js

This is a RESTful API built with Node.js, Express, Sequelize, and MariaDB. The API provides functionality for managing users, students, and photos, including authentication and file uploads.

## Features

- User authentication with JWT
- CRUD operations for users and students
- File upload functionality for student photos
- Sequelize ORM for database management
- MariaDB as the database
- Middleware for authentication and validation

## Project Structure

├── .editorconfig # Editor configuration<br>
├── .env # Environment variables (not included in the repository)
├── .env-example # Example environment variables
├── .gitignore # Git ignore file
├── .sequelizerc # Sequelize configuration
├── app.js # Main application file
├── eslint.config.mjs # ESLint configuration
├── nodemon.json # Nodemon configuration
├── package.json # Project dependencies and scripts
├── server.js # Server entry point
├── src/
│ ├── config/ # Configuration files
│ ├── controllers/ # API controllers
│ ├── database/ # Database setup, migrations, and seeds
│ ├── middlewares/ # Middleware functions
| ├── models/ # Sequelize models
│ ├── routes/ # API routes
├── uploads/ # Uploaded files

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd api_rest_node

2. Install Dependencies
   npm install

3. Create a `.env` file in the root directory and add the following environment variables:
   ```plaintext
    DATABASE=your_database_name
    DATABASE_HOST=your_database_host
    DATABASE_PORT=your_database_port
    DATABASE_USERNAME=your_database_username
    DATABASE_PASSWORD=your_database_password
    TOKEN_SECRET=your_jwt_secret
    TOKEN_EXPIRATION=your_token_expiration_time
    ```

4. Run Migrations
   ```bash
   npx sequelize-cli db:migrate
   ```

5. Seed Database
   ```bash
   npx sequelize-cli db:seed:all
   ```

## Usage

1. Start the development server
   ```bash
   npm run dev
   ```

2. Access the API at http://localhost:3001

## API Endpoints

### Authentication
- POST /tokens/ - Generate a JWT token.

### Users
- POST /users/ - Create a new user (requires authentication).
- PUT /users/ - Update the authenticated user (requires authentication).
- DELETE /users/ - Delete the authenticated user (requires authentication).

### Students
- GET /students/ - List all students.
- POST /students/ - Create a new student (requires authentication).
- GET /students/:id - Get a specific student by ID.
- PUT /students/:id - Update a student by ID (requires authentication).
- DELETE /students/:id - Delete a student by ID (requires authentication).

### Photos
- POST /photos/ - Upload a photo for a student (requires authentication).

### Technologies Used
- Node.js: JavaScript runtime
- Express: Web framework
- Sequelize: ORM for database management
- MariaDB: Database
- JWT: Authentication
- Multer: File upload handling
- dotenv: Environment variable management

# License
- This project is licensed under the ISC License.
