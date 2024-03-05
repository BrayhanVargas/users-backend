import Sequelize from 'sequelize';

// Configuration options for the database connection
const dbOptions = {
  host: 'localhost',
  username: '',
  password: '',
  database: 'core-users',
  dialect: 'postgres'
};

// Declare the Sequelize instance using the configuration options
export const sequelize = new Sequelize(dbOptions);
