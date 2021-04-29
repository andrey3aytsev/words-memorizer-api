import express from 'express';
import cors from 'cors';
import { wordsRouter } from './routes/words';
import { env } from './environment';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/words', wordsRouter);

app.listen(env.appPort, () => console.log('server has been started'));
