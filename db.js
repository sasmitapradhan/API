 const fs = require("fs");
 const path =  require("path");
 const Sequelize = require("sequelize");
 const sql = require("mssql");
 const config = require("./libs/config.js");
 let db = null;

 module.exports = () => {
 if (!db) {  
 const sequelize = new Sequelize(
 config.database,
 config.username,
 config.password,
 config.params,
 config.port,
 config.host,
 config.dialectOptions
 );
 db = {
    sequelize,
    Sequelize,
    models: {}
};
    const dir = path.join(__dirname, "models");
    fs.readdirSync(dir).forEach(file => {
      const modelDir = path.join(dir, file);
      const model = sequelize.import(modelDir);
      db.models[model.name] = model;
    });
 Object.keys(db.models).forEach(key => {
 db.models[key].associate(db.models);
 });
};
 return db;
 };