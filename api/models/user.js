'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      firstname: {
        type: DataTypes.STRING,
      },
      lastname: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      mobile_number: {
        type: DataTypes.STRING,
      },
      photo: {
        type: DataTypes.STRING,
      },
      access_token: {
        type: DataTypes.STRING,
      },
    },
    {},
  );
  User.associate = function(models) {
    User.hasMany(models.UserRole, { as: 'roles', onDelete: 'CASCADE' });
  };
  return User;
};
