import { Sequelize } from 'sequelize';
import { dbConfig } from '../db.config';

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  { host: dbConfig.host, dialect: dbConfig.dialect }
);

sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully..'))
  .catch(err => console.error('Unable to connect to the database:', err));

export { sequelize };
