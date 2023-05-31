# User Management API with Express and MongoDB
Source: [The Complete Guide To Building A REST API With Node, Express, TypeScript & MongoDB + Authentication](https://www.youtube.com/watch?v=b8ZUb_Okxro)

This repository provides an API for managing user data, including name, email, and password, using Express and MongoDB. The API allows for user registration, viewing all users, deleting users (only available to logged-in users), and updating user information (only available to logged-in users).

## Features

- User registration API
- User viewing API
- User deletion API (only available to logged-in users)
- User update API (only available to logged-in users)
- Login functionality

## Installation

To use this API, follow these steps:

1. Clone the repository: `git clone https://github.com/yuta-nishi/youtube-rest-api.git`
2. Install the necessary packages: `npm install`
3. Set up the database: Register [MongoDB Atlas](https://www.mongodb.com/atlas/database) and set the connection URL.

## Usage

Here's how to use this API:

1. Start the server: `npm start`
2. Access the API endpoints:

- User registration API: `POST /auth/register`
- User viewing API: `GET /users`
- User deletion API: `DELETE /users/:id` (only available to logged-in users)
- User update API: `PATCH /users/:id` (only available to logged-in users)
- Login API: `POST /auth/login`

## License

This project is licensed under the MIT License.
