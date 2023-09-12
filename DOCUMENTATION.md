# API Documentation

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

---

**Response:**

- `201 Created`: User created successfully.

{
"message": "User created successfully!!",
"user": {
"\_id": "user_id",
"name": "John",
"email": "user@example.com",
"phone": "123-456-7890"
}
}

- `400 Bad Request:` Invalid request data (e.g., non-string fields).
