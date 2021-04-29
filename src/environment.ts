import dotenv from 'dotenv';
dotenv.config();

const env = {
  appPort: process.env.PORT,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_USER_PASS,
};

export { env };
