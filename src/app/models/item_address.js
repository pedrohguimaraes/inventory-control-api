module.exports = (sequelize, DataType) => {

    const Item_address = sequelize.define('Item_address', {
      address_inventory_id: DataType.INTEGER,
      item_id: DataType.INTEGER,

    }, {
      timestamps: false,
      tableName: 'item_address'
    });

    return Item_address;
}