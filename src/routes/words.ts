import express from 'express';
import { WordsController } from '../controllers/words';

const wordsRouter = express.Router();
wordsRouter.get('/', WordsController.query);
wordsRouter.get('/:id', WordsController.get);

export { wordsRouter };
