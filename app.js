const dotenv = require('dotenv');
const mysql = require('mysql2');
const express = require('express');

dotenv.config();

const app = express();

// Necessary for parsing application/json
app.use(express.json());

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
  connection.query('SELECT * FROM words;', (error, data) => {
    if (error) console.log(error);
    res.json(data);
  });
});

app.post('/words', (req, res) => {
  const { origin, translation } = req.body;
  const sqlRequest = 'INSERT INTO words (origin, translation) VALUES (?, ?)';

  connection.query(sqlRequest, [origin, translation], (error, data) => {
    if (error) console.log(error);
    res.json(data);
  });
});

app.get('/words/:id', (req, res) => {
  const id = req.params?.id;

  connection.query('SELECT * FROM words WHERE id = ?', [id], (error, data) => {
    if (error) console.log(error);
    res.json(data[0]);
  });
});

app.put('/words/:id', (req, res) => {
  const id = req.params?.id;
  const { origin, translation } = req.body;
  const sqlRequest = 'UPDATE words SET origin = ?, translation = ? WHERE id = ?';

  connection.query(sqlRequest, [origin, translation, id], (error, data) => {
    if (error) console.log(error);
    res.json(data);
  });
});

app.delete('/words/:id', (req, res) => {
  const id = req.params?.id;

  connection.query('DELETE FROM words WHERE id = ?', [id], (error, data) => {
    if (error) console.log(error);
    res.json(data);
  });
});

app.listen(3000, () => console.log('server has been started'));
