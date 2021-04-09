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

export { WordsModel };
