const { Sequelize } = require('sequelize');
const sequelize = require('../config/db');

// Initialize models
const User = require('./User')(sequelize);
const EmailTemplate = require('./EmailTemplate')(sequelize);
const Stakeholder = require('./Stakeholder')(sequelize);
const Regulation = require('./Regulation')(sequelize);
const Country = require('./Country')(sequelize);
const Product = require('./Product')(sequelize);
const CustomDeclaration = require('./CustomDeclaration')(sequelize);

// Define relationships
Stakeholder.belongsTo(Country, { foreignKey: 'country_id' });
Regulation.belongsTo(Stakeholder, { foreignKey: 'stakeholder_id' });

Product.belongsTo(User, { foreignKey: 'trader_id', as: 'trader' }); // Associate Product with User directly

CustomDeclaration.belongsTo(User, { foreignKey: 'trader_id', as: 'trader' }); // Associate CustomDeclaration with User directly
CustomDeclaration.belongsTo(Product, { foreignKey: 'product_id' });

// Export models and sequelize instance
module.exports = {
    sequelize,
    User,
    Stakeholder,
    Regulation,
    Product,
    EmailTemplate,
    CustomDeclaration,
    Country,
};