const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    logging: process.env.DB_LOGGING || false,
    host: process.env.HOST,
    dialect: 'mysql',
  },
};
