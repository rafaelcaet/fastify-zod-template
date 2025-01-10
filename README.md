# Fastify Project with Swagger and Zod

This project is a Fastify-based API setup with TypeScript, leveraging Zod for schema validation and Swagger for API documentation.

## Features

- **Fastify Framework**: A lightweight and fast Node.js web framework.
- **Zod Integration**: Used for runtime schema validation and type inference.
- **Swagger Documentation**: Includes interactive API documentation with Swagger UI.
- **CORS Enabled**: Configured to allow requests from any origin.

## Prerequisites

- Node.js >= 16.x
- npm or yarn

## Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd <repository_name>
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

## Usage

1. Start the server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. The server will be running at:

   ```
   http://localhost:3000
   ```

3. Access the Swagger documentation at:

   ```
   http://localhost:3000/docs
   ```

## Project Structure

```plaintext
.
├── src
│   ├── routes
│   │   └── routes.ts  # API routes definition
│   ├── index.ts       # Application entry point
├── package.json       # Project metadata and scripts
├── tsconfig.json      # TypeScript configuration
└── README.md          # Project documentation
```

## Dependencies

- `fastify`: Web framework for Node.js.
- `@fastify/cors`: Middleware to handle Cross-Origin Resource Sharing.
- `@fastify/swagger`: Swagger integration for Fastify.
- `@fastify/swagger-ui`: Provides a user-friendly Swagger UI.
- `fastify-type-provider-zod`: Zod integration for Fastify.
- `zod`: Schema validation library.

## Scripts

- `npm run dev`: Start the development server with hot reload.

## Configuration

- **CORS**: Configured to allow all origins. Modify in the `app.register(fastifyCors, { origin: "*" });` call if needed.
- **Swagger**: Access API documentation at `/docs`. Update the `openapi` object for customized info.

## License

This project is licensed under the [MIT License](LICENSE).

---

Enjoy building your API with Fastify and Zod!
