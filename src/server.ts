import express from 'express';
import { wordsRouter } from './routes/words';

const app = express();

app.use(express.json());
app.use('/words', wordsRouter);

app.listen(process.env.PORT, () => console.log('server has been started'));
