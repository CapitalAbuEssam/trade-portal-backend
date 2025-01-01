const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Product', {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        hs_code: { type: DataTypes.STRING, allowNull: false },
        classification: { type: DataTypes.INTEGER },
        chapter: { type: DataTypes.INTEGER },
        image_url: { type: DataTypes.STRING },
    });
};
