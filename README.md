# Hono Tutor

A professional, modular, and well-documented REST API project using [Hono](https://hono.dev/) and TypeScript. This project demonstrates best practices for structure, error handling, validation, and API documentation with Swagger.

---

## Features

- Modular route and handler structure
- Centralized middleware and service layers
- TypeScript with strict settings
- Environment variable support via dotenv
- Professional error handling and request logging
- Request validation middleware
- OpenAPI (Swagger) documentation and UI

---

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Usage](#api-usage)
- [Swagger & API Docs](#swagger--api-docs)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the server

```bash
npm run dev
```

The server will start on the port defined in `.env` (default: 3000).

---

## Project Structure

```text
src/
  app.ts            # Hono app and middleware registration
  index.ts          # Entry point, server setup
  routes/
    index.ts        # Barrel file for all routes
    root/
      index.ts      # Route registration for root
      handler.ts    # Handler for root route
    user/
      index.ts      # Route registration for user
      handler.ts    # Handlers for user endpoints
    swagger/
      index.ts      # Swagger UI route
      handler.ts    # Swagger handler
  middleware/
    index.ts        # Barrel file for all middleware
    logger.ts       # Logger middleware
    errorHandler.ts # Error handler middleware
    validate.ts     # Validation middleware
  services/
    index.ts        # Barrel file for all services
    userService.ts  # User service class
public/
  swagger.json      # OpenAPI spec
```

---

## API Usage

### List Users

**GET** `/users`

Response:

```json
{
  "users": [{ "id": 1, "name": "Alice" }]
}
```

### Create User

**POST** `/users`

Request body:

```json
{
  "name": "Bob"
}
```

Response:

```json
{
  "user": { "id": 2, "name": "Bob" }
}
```

### Error Response Example

```json
{
  "error": true,
  "message": "Name is required and must be a string"
}
```

---

## Swagger & API Docs

- Interactive API docs: [http://localhost:3000/docs](http://localhost:3000/docs)
- OpenAPI spec: [http://localhost:3000/swagger.json](http://localhost:3000/swagger.json)

---

## Environment Variables

Create a `.env` file in the project root:

```env
PORT=3000
```

---

## Contributing

1. Fork this repo
2. Create a feature branch
3. Commit your changes
4. Open a pull request

Contributions, issues, and feature requests are welcome!

---

## License

MIT
