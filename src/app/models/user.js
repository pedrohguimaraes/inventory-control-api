module.exports = (sequelize, DataType) => {

    const User = sequelize.define('User', {
      name: DataType.STRING(255),
      is_active: DataType.BOOLEAN
    }, {
      timestamps: false,
      tableName: 'user'
    });

    return User;
}