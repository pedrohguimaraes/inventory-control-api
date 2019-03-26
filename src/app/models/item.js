module.exports = (sequelize, DataType) => {

    const Item = sequelize.define('Item', {
      bar_code: DataType.STRING(45),
      current_location: DataType.STRING(45),
      external_id: DataType.STRING(255),
      product_id: DataType.INTEGER
    }, {
      timestamps: false,
      tableName: 'item'
    });

    return Item;
}