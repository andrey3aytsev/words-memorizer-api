import { WordsModel } from '../models/words';
import { Request, Response } from 'express-serve-static-core';
import { apiErrorHandler } from '../utils/errors';

class WordsController {
  public static query(req: Request, res: Response): Promise<Response<WordsModel>> {
    return WordsModel.findAll()
      .then(result => res.status(200).send(result))
      .catch(error => apiErrorHandler(error, req, res));
  }

  public static get(req: Request, res: Response): Promise<Response<WordsModel>> {
    return WordsModel.findByPk(req.params.id)
      .then((result) => {
        if (result) return res.status(200).send(result);
        return res.status(404).send({ Message: 'Word not found' });
      })
      .catch(error => apiErrorHandler(error, req, res));
  }
}

export { WordsController };
