module.exports = (sequelize, DataType) => {
     const Products = sequelize.define("Products", {
     id: {
     type: DataType.INTEGER,
     primaryKey: true,
     autoIncrement: true
     },
     productName: {
     type: DataType.STRING,
     allowNull: false,
     validate: {
      notEmpty: true
     }
     },
     availableUnit: {
     type: DataType.INTEGER,
     allowNull: false,
     defaultValue: false
     }
     }, {
    classMethods: {
     associate: (models) => {
        Products.belongsTo(models.Users);
     }
     }
     });
     return Products;
 };