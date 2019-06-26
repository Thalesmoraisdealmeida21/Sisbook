const Sequelize = require('sequelize');
const path = require('path')
const fs = require('fs')

const db = {}


const sequelize = new Sequelize('sisbook2', 'thales', 'password', {
    dialect: 'mysql',
    host: "127.0.0.1",
    operatorsAliases: Sequelize.Op
});


fs
    .readdirSync(__dirname)
    .filter(file => (file.indexOf('.') !== 0 && (file !== 'connect.js')))
    .forEach(file => {
        const model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model
    });

console.log(db)

Object
    .values(db)
    .filter(model => typeof model.associate === "function")
    .forEach(model => model.associate(db));

sequelize
    .authenticate()
    .then(() => console.log('ok!'))
    .catch(() => console.log('ERROR'))

db.sequelize = sequelize;
db.Sequelize = Sequelize;



module.exports = db;