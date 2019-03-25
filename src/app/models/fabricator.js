module.exports = (sequelize, DataType) => {

    const Fabricator = sequelize.define('Fabricator', {
      name: DataType.STRING(255),
      address: DataType.TEXT,
      identification: DateType.STRING(30),
      contact: DataType.STRING(45)
    }, {
      timestamps: false,
      tableName: 'fabricator'
    });

    return Fabricator;
}