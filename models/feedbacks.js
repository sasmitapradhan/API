module.exports = (sequelize, DataType) => {
    const Products = sequelize.define("Feedbacks", {
    id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    ratings: {
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
     notEmpty: true
    }
    },
    comments: {
    type: DataType.STRING,
    allowNull: false,
    defaultValue: false
    },
    emailId: {
     type: DataType.STRING,
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