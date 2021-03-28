const dotenv = require('dotenv');
const mysql = require('mysql2');
const express = require('express');

dotenv.config();

const app = express();

const {
  CONNECTION_HOST,
  CONNECTION_PORT,
  CONNECTION_USER,
  CONNECTION_PASSWORD,
  CONNECTION_DBNAME
} = process.env;

const connection = mysql.createConnection({
  host: CONNECTION_HOST,
  port: CONNECTION_PORT,
  user: CONNECTION_USER,
  password: CONNECTION_PASSWORD,
  database: CONNECTION_DBNAME
});

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/words', (req, res) => {
  connection.query('select * from `words`;', (error, data) => {
    if (error) console.log(error);
    res.json(data);
  });
});

app.listen(3000, () => console.log('server has been started'));
