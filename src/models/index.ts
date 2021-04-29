import { Sequelize } from 'sequelize';
import { env } from '../environment';

const sequelize = new Sequelize(
  env.database,
  env.user,
  env.password,
  { host: env.host, dialect: 'mysql' }
);

sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully..'))
  .catch(err => console.error('Unable to connect to the database:', err));

export { sequelize };
