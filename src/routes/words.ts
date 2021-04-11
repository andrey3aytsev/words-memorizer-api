import express from 'express';
import { WordsController } from '../controllers/words';

const wordsRouter = express.Router();
wordsRouter.get('/', WordsController.query);
wordsRouter.post('/', WordsController.create);
wordsRouter.get('/:id', WordsController.get);
wordsRouter.delete('/:id', WordsController.delete);

export { wordsRouter };
