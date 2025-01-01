const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Stakeholder', {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        country_id: { type: DataTypes.INTEGER, allowNull: false },
        sector: { type: DataTypes.STRING },
    });
};
