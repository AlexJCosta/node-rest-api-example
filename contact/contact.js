module.exports = (sequelize, DataTypes) => {
    var Contact = sequelize.define('Contacts', {
        id: {type: DataTypes.STRING(45), primaryKey: true},
        contact: {type: DataTypes.STRING(10), allowNull: false}
    });
    return Contact;
};