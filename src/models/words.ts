import { sequelize } from './index';
import { Model, DataTypes } from 'sequelize';

class Words extends Model {
  public id: string;
  public origin: string;
  public translate: string;
}

Words.init({
  id: { type: DataTypes.STRING, primaryKey: true },
  origin: { type: DataTypes.STRING },
  translate: { type: DataTypes.STRING }
}, {
  sequelize,
  tableName: 'words'
});

export { Words };
