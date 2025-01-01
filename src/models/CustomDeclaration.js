const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('CustomDeclaration', {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        trader_id: { type: DataTypes.INTEGER, allowNull: false },
        product_id: { type: DataTypes.INTEGER, allowNull: false },
        entry_point_id: { type: DataTypes.INTEGER, allowNull: false },
        departure_date: { type: DataTypes.DATE, allowNull: false },
        arrival_date: { type: DataTypes.DATE, allowNull: false },
    });
};
