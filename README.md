# Health Centers API

This is a Node.js API for Health Centers. It uses Express.js and Nodemon, with MongoDB and Mongoose for database operations. The connection to the MongoDB database is set up using a connection string from Atlas.

## Installation

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Create a `.env` file in the root directory of the project and add your MongoDB Atlas connection string as `DB_CONNECTION_STRING`
4. Run `npm start` to start the application

## Usage

The API has the following routes:

- `GET /centers`: Get all health centers
- `POST /centers`: Create a new health center
- `GET /centers/:id`: Get a specific health center
- `PUT /centers/:id`: Update a specific health center
- `DELETE /centers/:id`: Delete a specific health center

## Models

The Health Center model has the following schema:

```javascript
{
  name: String,
  address: String,
  city: String,
  state: String,
  zip: String
}
```

## Scripts

- `npm start`: Start the application
- `npm run dev`: Start the application with Nodemon for automatic reloading

## Dependencies

- express: Web framework for Node.js
- mongoose: ODM for MongoDB
- nodemon: Utility for automatic reloading of the application
- dotenv: Module for loading environment variables from a `.env` file

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)