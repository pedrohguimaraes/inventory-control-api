module.exports = (sequelize, DataType) => {

    const Item_requisition = sequelize.define('Item_requisition', {
      date_limit: DataType.DATE,
      product_id: DataType.INTEGER,
      address_inventory_id: DataType.INTEGER
    }, {
      timestamps: false,
      tableName: 'item_requisition'
    });

    return Item_requisition;
}