const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('EmailTemplate', {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        subject: { type: DataTypes.STRING, allowNull: false },
        body: { type: DataTypes.TEXT, allowNull: false },
    });
};
