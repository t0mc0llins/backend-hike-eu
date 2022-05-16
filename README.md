# Hike EU Backend

This is the backend for Hike EU, a simple REST api written in Node.js.

- Sequelize is used with PostgreSQL to build and seed the database
- Routes include basic validation and are authenticated with a middleware where appropriate
- Users are issued with JSON Web Tokens when they login (checked by the middleware when needed)
