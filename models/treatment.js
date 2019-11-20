'use strict';
module.exports = (sequelize, DataTypes) => {
  const Treatment = sequelize.define('Treatment', {
    treatment_info: DataTypes.STRING,
    start_date: DataTypes.DATEONLY,
    end_date: DataTypes.DATEONLY,
    response: DataTypes.STRING,
  }, {});
  Treatment.associate = function(models) {
    // associations can be defined here
  };
  return Treatment;
};