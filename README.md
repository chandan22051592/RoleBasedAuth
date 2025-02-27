# Project Name
RoleBasedAuthentication

## Description
This project implements a role-based authentication system using Node.js and Express. It provides a secure way of managing user authentication with different roles (such as admin, manager user, etc.), allowing the system to control access to various resources based on the user's assigned role.

## Installing

1. Clone the repository:
   ```bash
   git clone https://github.com/chandan22051592/RoleBasedAuth
   cd your-repository

## Setup
1. Install dependecies npm install 
2. Create a .env file provide the below details
    PORT=XXXX
    JWT_SECRET=XXXX
    CONNECTION_STRING=XXXX

### Prerequisites
Make sure you have the following software installed on your system:

- Node.js (version v22.13.1)
- npm (version 10.9.2)


### Authorization Header
To access protected routes, you must include a valid JWT token in the Authorization header of your HTTP requests. The token should be prefixed with the word Bearer.

Example Authorization Header:
Authorization: Bearer <YOUR_JWT_TOKEN>

#### Example API Endpoints
1. POST /api/signup: Pass "username", "password" and "role" in the body of request.

2. POST /api/login: Pass "username" and "password" to receive a JWT token.
    Example response:
    { "token": "JWT_TOKEN" }

3. GET /api/users/user: A protected route accessible only with a valid JWT token.
    allowed user = "{"admin","manager","user"}"
    You must provide the Authorization header as described above.
    exmaple: GET /api/admin: A route restricted to users with the admin role. 


