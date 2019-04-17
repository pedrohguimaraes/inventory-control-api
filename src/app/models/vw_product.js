module.exports = (sequelize, DataType) => {

    const Vw_product = sequelize.define('Vw_product', {
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
      minimum_stock: DataType.INTEGER,
      obs: DataType.STRING(255),
      active: DataType.BOOLEAN,
      fabricatorName: DataType.STRING(255),
      identification: DataType.STRING(30),
      contact: DataType.STRING(45)
    }, {
      timestamps: false,
      tableName: 'vw_product'
    });
    
    return Vw_product;
}