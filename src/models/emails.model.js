import { DataTypes } from 'sequelize';
import { sequelize } from '../services/db/db.service.js';

const Email = sequelize.define('emails', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  userId: {
    field: 'user_id',
    type: DataTypes.INTEGER,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at',
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  }
});

Email.sync({ force: false });

export default Email;
