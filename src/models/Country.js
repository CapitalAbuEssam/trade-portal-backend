const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Country', {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        code: { type: DataTypes.STRING, unique: true, allowNull: false },
    });
};
