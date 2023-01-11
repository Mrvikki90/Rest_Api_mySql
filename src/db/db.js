const dbConfig = require("../Config/Config.js");
const Sequelize = require("Sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operationsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Student = require("../modal/student.modal")(sequelize, Sequelize);

module.exports = db;
