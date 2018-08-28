module.exports = (sequelize, DataType) => {
    const Contacts = sequelize.define("Contacts", {
    id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    Name: {
    type: DataType.STRING,
    allowNull: false,
    validate: {
     notEmpty: true
    }
    },
    email: {
    type: DataType.STRING,
    allowNull: false,
    defaultValue: false
    },
    mobileNo: {
        type: DataType.BIGINT,
        allowNull: false,
        defaultValue: false
    },
    subject: {
        type: DataType.STRING,
        allowNull: false,
        defaultValue: false
    },
    message: {
        type: DataType.STRING,
        allowNull: false,
        defaultValue: false
    }
    }, {
   classMethods: {
    associate: (models) => {
        Contacts.belongsTo(models.Users);
    }
    }
    });
    return Contacts;
};