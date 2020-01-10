module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('Users', {
        id: {type: DataTypes.STRING(45), primaryKey: true},
        name: {type: DataTypes.STRING(100), allowNull: false},
        email: {type: DataTypes.STRING(100), allowNull: false},
        role: {type: DataTypes.ENUM('admin', 'user'), allowNull: false}
    });
    return User;
}