import { sequelize } from './index';
import { Model, CHAR } from 'sequelize';

class WordsModel extends Model {
  public id: string;
  public origin: string;
  public translation: string;
}

WordsModel.init({
  id: { type: CHAR(255), primaryKey: true },
  origin: { type: CHAR(255) },
  translation: { type: CHAR(255) }
}, {
  sequelize,
  tableName: 'words',
  timestamps: false
});

WordsModel.sync()
  .then(() => console.log('WordsModel has been synchronized successfully.'))
  .catch(err => console.error('Unable to sync WordsModel:', err));

export { WordsModel };
