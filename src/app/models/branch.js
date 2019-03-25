module.exports = (sequelize, DataType) => {

    const Branch = sequelize.define('Branch', {
      name: DataType.STRING(255),
      address: DataType.TEXT,
      state: DateType.STRING(20),
      country: DataType.STRING(25),
      is_active: DataType.BOOLEAN
    }, {
      timestamps: false,
      tableName: 'branch'
    });

    return Branch;
}