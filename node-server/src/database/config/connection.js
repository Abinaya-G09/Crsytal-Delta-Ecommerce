const Sequelize = require('sequelize');
const logger = require('../..helpers/utils/logger');
const config = require('./config');

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: 3306,
    dialect: config.dialect,
    logging: config.logging
  }
);

sequelize.authenticate().then(() => {
  logger.info({
    message: 'DB Connected Successfully'
  });
}).catch(err => {
  throw ('Error: ', err);
});

export default sequelize;
global.sequelize = sequelize;
