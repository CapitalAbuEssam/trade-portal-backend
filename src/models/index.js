const { Sequelize } = require('sequelize');
const sequelize = require('../config/db');

const models = {
    User: require('./User')(sequelize),
    Trader: require('./Trader')(sequelize),
    EmailTemplate: require('./EmailTemplate')(sequelize),
    Stakeholder: require('./Stakeholder')(sequelize),
    Regulation: require('./Regulation')(sequelize),
    Country: require('./Country')(sequelize),
    Product: require('./Product')(sequelize),
    CustomDeclaration: require('./CustomDeclaration')(sequelize),
};

// Relationships
models.User.hasOne(models.Trader, { foreignKey: 'id', onDelete: 'CASCADE' });
models.Trader.belongsTo(models.User, { foreignKey: 'id' });

models.Stakeholder.belongsTo(models.Country, { foreignKey: 'country_id' });
models.Regulation.belongsTo(models.Stakeholder, { foreignKey: 'stakeholder_id' });

models.CustomDeclaration.belongsTo(models.Trader, { foreignKey: 'trader_id' });
models.CustomDeclaration.belongsTo(models.Product, { foreignKey: 'product_id' });

module.exports = { ...models, sequelize };