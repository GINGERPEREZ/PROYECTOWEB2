import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../datebase/sequelize';

export class MascotaModel extends Model {
  public id!: number;
  public nombre!: string;
}

MascotaModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
     autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    }

  },
  {
    sequelize,
    tableName: 'mascota',
    schema: 'public',
    timestamps: false
  }
); 