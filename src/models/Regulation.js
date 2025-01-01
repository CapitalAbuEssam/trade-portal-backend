const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Regulation', {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        title: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT, allowNull: false },
        stakeholder_id: { type: DataTypes.INTEGER, allowNull: false },
    });
};
