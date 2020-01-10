module.exports = (sequelize, DataTypes) => {
    var Address = sequelize.define('Address', {
        id: {type: DataTypes.STRING(45), primaryKey: true},
        street: {type: DataTypes.STRING(100), allowNull: false}
    });
    return Address;
}