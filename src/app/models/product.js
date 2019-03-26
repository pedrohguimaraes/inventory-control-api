module.exports = (sequelize, DataType) => {

    const Product = sequelize.define('Product', {
      fabricator_id: DataType.INTEGER(),
      name: DataType.STRING(255),
      registration_date: DataType.DATE,
      description: DataType.TEXT,
      width: DataType.DOUBLE,
      height: DataType.DOUBLE,
      lenght: DataType.DOUBLE,
      taxation: DataType.DOUBLE,
      gross_weight: DataType.DOUBLE,
      net_weight: DataType.DOUBLE,
      minimum_stock: DataType.INTEGER
    }, {
      timestamps: false,
      tableName: 'product'
    });

    return Product;
}