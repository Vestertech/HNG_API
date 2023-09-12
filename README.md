# DOCUMENTATION LINK HERE

Postman Documentation-(<https://documenter.getpostman.com/view/23083428/2s9YC2zDui>)

````markdown
## HNG_API with Node.js Express CRUD Application

This is a simple CRUD (Create, Read, Update, Delete) application built using Node.js and Express.js, with a MongoDB database. It allows you to manage user records.

## Table of Contents

- [HNG_API with Node.js Express CRUD Application](#hng_api-with-nodejs-express-crud-application)
  - [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contributor](#contributor)

## Requirements

- Node.js (v12 or higher)
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Vestertech/HNG_API.git
   cd <repository_directory>
   ```

   _`Install depencency`_

npm install

2. Set up MongoDB:

   _Install MongoDB if not already installed_.
   _Create a MongoDB database named HNG_API_.
   _Update the database configuration in config.env if needed._

3. Start the server:

   - npm run start

   The server should now be running on port 3000.

## Usage

    You can access the application through the following API endpoints:

## API Endpoints

- GET /user: Get a list of all users.
- GET /user/:id: Get a single user by ID.
- POST/user: Create a new user.

  Example Request Body:
  {
  "message": "User created successfully!",
  "user": {
  "name": "Peter Eziagor",
  "\_id": "64ffa1606391952e45a8b643",
  "\_\_v": 0
  }
  }

- PATCH/user/id: Update a user by ID
  Example Request Body:
  {
  "message": "User updated successfully!"
  }

  - DELETE /user/:id: Delete a user by ID.

  Make HTTP requests to these endpoints using a tool like Postman or any API testing tool.

## Contributing

    Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and test thoroughly.
4. Submit a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

Replace `<repository_url>` and `<repository_directory>` with your actual repository URL and directory name. This `README.md` provides information on how to set up, use, and contribute to your CRUD application.

## Contributor

- Sylvester Eziagor
````
