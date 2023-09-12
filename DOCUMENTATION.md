# API Documentation

## UML Diagram

Picture : shows overflow of the api and the request and response formats of each operation made.

<img src="https://tinyurl.com/jt0wDlOV" width="400">

````markdown
Welcome to the API documentation for the HNG_API. This API allows you to perform CRUD (Create, Read, Update, Delete) operations on user records. It is designed to be flexible in handling dynamic input and enforces input validation.

## Base URL

The base URL for all API endpoints is: `https://endpoint-dc4f.onrender.com`

## Authentication

This API does not require authentication for basic CRUD operations.

## Endpoints

### Create a User

**Endpoint:** `/user`

**Method:** `POST`

**Description:** Create a new user with the provided details.

**Request Body:**

```json
{
  "name": "test name",
  "email": "user@example.com",
  "phone": "123-456-7890"
}
```
````

---

**Response:**

- `201 Created`: User created successfully.

```{
"message": "User created successfully!!",
"user": {
"\_id": "user_id",
"name": "John",
"email": "user@example.com",
"phone": "123-456-7890"
}
}
```

- `400 Bad Request:` Invalid request data (e.g., non-string fields).

## Retrieve Users

_Endpoint: `/user`_
_Method: `GET`_

**Description:** Retrieve a list of all users or users matching a name.

## Query Parameters

- `name`: Filter users by first name or last name.

**Response:**

- `200 Ok`: List of users.

```[
  {
    "_id": "user_id1",
    "name": "John",
    "email": "user1@example.com",
    "phone": "123-456-7890"
  },
  {
    "_id": "user_id2",
    "name": "Jane",
    "email": "user2@example.com",
    "phone": "987-654-3210"
  }
]
```

### Retrieve User by ID or Name

**Endpoint:** `/user/:id`

**Method:** `GET`

**Description:** Retrieve a single user by ID or a name.

**Parameters:**

- _`id`_: User ID
- _`name`_: User's name.

  **Response:**

- _`200 OK`_: User Found.

```{
  "_id": "user_id",
  "email": "user@example.com",
  "name": "John",
  "phone": "123-456-7890"
}
```

- _`400 Not Found`_: User not found.

### Update User by ID or Name

**Endpoint:** `/user/:id`

**Method:** `PATCH`

**Description:** Update a user by ID or a name.

**Parameters:**

- _`id`_: User ID
- _`name`_: User's first name or last name

**Request Body:**

```{
  "email": "updated@example.com",
  "name": "Updated",
  "phone": "987-654-3210"
}
```

**Response:**

- _`200 OK`_: User updated successfully.

```{
  "message": "User updated successfully."
}
```

- _`400 Not Found`_: User not found.
- _`400 Bad Request`_: Invalid request data (e.g., non-string fields).

### Delete User by ID or Name

**Endpoint:** `/user/:id`

**Method:** `DELETE`

**Description:** Delete a user by ID or a name.

**Parameters:**

- _`id`_: User ID
- _`name`_(optional): User's first name or last name.

  **Response:**

- _`200 OK`_: User deleted successfully.

```{
  "message": "User deleted successfully!"
}
```

## Errors

- _`400 Bad Request`_: Invalid request data or missing fields.
- _`404 Not Found`_: Resource not found.
- _`500 Internal Server Error`_: Server error.

## Authentication

This API does not require authentication for basic CRUD operations.

## Known Limitations

- Rate Limiting: This API does not currently implement rate limiting. It is recommended to implement rate limiting in a production environment to prevent abuse.

- Data Validation: While the API enforces input validation for string fields, it does not currently support additional data validation, such as email format validation.

## Assumptions

- Data Type Assumption: The API assumes that input data for fields like `email`, `name`, and `phone` will be of string data type.

## Setup and Deployment

### Local Development

Follow these steps to set up and deploy the API locally for development and testing purposes:

1. Clone the repository:
   git clone <https://github.com/Vestertech/HNG_API/tree/master.git>

2. Install dependencies:
   cd _repository-directory_
   npm install

```markdown
3. Set up the MongoDB database:

- Ensure that MongoDB is installed and running.
- Create a MongoDB database and update the database URL in `config/database.config.js`.

4. Start the API server:
```

npm run start

```vbnet
The API will be accessible at `http://localhost:3200`.

### Production Deployment

For production deployment, follow these high-level steps:

1. Set up a production-ready web server (e.g., Render, Apache).

2. Configure environment variables for your production environment, including database connection details and any security-related settings.

3. Use a process manager (e.g., PM2) to manage your Node.js application for improved stability and reliability.

4. Deploy your API to a production server and configure DNS settings as necessary.

```

## Conclusion

This API provides a flexible and user-friendly way to manage user records. Do refer to the provided endpoints and request/response examples for more details on how to use the API effectively.

```markdown

```
