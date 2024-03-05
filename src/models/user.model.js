import { DataTypes } from 'sequelize';
import { sequelize } from '../services/db/db.service.js';
import Email from './emails.model.js';
import Phone from './phones.model.js';

const User = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  firstName: {
    field: 'first_name',
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    field: 'last_name',
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

User.hasMany(Email, {
  foreignKey: {
    name: 'userId'
  }
});
User.hasMany(Phone, {
  foreignKey: {
    name: 'userId'
  }
});
User.sync({ force: false });

export default User;
