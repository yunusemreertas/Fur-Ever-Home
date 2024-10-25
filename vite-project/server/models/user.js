import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

// Define the User model
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,    // Username must not be null
    unique: true,        // Username must be unique in the database
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,    // Password must not be null
  }
});

export default User;
