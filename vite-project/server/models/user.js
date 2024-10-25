// server/models/user.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';  // ES module import

// Define the User model
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default User;  // ES module export
