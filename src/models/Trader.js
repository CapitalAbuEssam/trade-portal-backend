const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Trader', {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        company_name: { type: DataTypes.STRING, allowNull: false },
        tax_number: { type: DataTypes.STRING },
        website: { type: DataTypes.STRING },
        phone_number: { type: DataTypes.STRING },
    });
};
