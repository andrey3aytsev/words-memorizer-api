"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mysql2_1 = __importDefault(require("mysql2"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config();
const server = express_1.default();
// Necessary for parsing application/json
server.use(express_1.default.json());
const { CONNECTION_HOST, CONNECTION_PORT, CONNECTION_USER, CONNECTION_PASSWORD, CONNECTION_DBNAME } = process.env;
const connection = mysql2_1.default.createConnection({
    host: CONNECTION_HOST,
    port: Number(CONNECTION_PORT),
    user: CONNECTION_USER,
    password: CONNECTION_PASSWORD,
    database: CONNECTION_DBNAME
});
server.get('/', (req, res) => {
    res.send('Hello');
});
server.get('/words', (req, res) => {
    connection.query('SELECT * FROM words;', (error, data) => {
        if (error)
            console.log(error);
        res.json(data);
    });
});
server.post('/words', (req, res) => {
    const { origin, translation } = req.body;
    const sqlRequest = 'INSERT INTO words (origin, translation) VALUES (?, ?)';
    connection.query(sqlRequest, [origin, translation], (error, data) => {
        if (error)
            console.log(error);
        res.json(data);
    });
});
server.get('/words/:id', (req, res) => {
    var _a;
    const id = (_a = req.params) === null || _a === void 0 ? void 0 : _a.id;
    connection.query('SELECT * FROM words WHERE id = ?', [id], (error, data) => {
        if (error)
            console.log(error);
        res.json(data[0]);
    });
});
server.put('/words/:id', (req, res) => {
    var _a;
    const id = (_a = req.params) === null || _a === void 0 ? void 0 : _a.id;
    const { origin, translation } = req.body;
    const sqlRequest = 'UPDATE words SET origin = ?, translation = ? WHERE id = ?';
    connection.query(sqlRequest, [origin, translation, id], (error, data) => {
        if (error)
            console.log(error);
        res.json(data);
    });
});
server.delete('/words/:id', (req, res) => {
    var _a;
    const id = (_a = req.params) === null || _a === void 0 ? void 0 : _a.id;
    connection.query('DELETE FROM words WHERE id = ?', [id], (error, data) => {
        if (error)
            console.log(error);
        res.json(data);
    });
});
server.listen(3000, () => console.log('server has been started'));
//# sourceMappingURL=server.js.map