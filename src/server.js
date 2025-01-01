/*
const app = require('./app');
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
*/

const { sequelize } = require('./models'); // No need for './src/models' since `src` is the root.
const app = require('./app');

const PORT = process.env.PORT || 5001;

sequelize.sync({ force: true }).then(() => {
    console.log('Database synchronized!');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});


// Note: Use { force: true } only during development. It will drop and recreate tables each time you restart the server.