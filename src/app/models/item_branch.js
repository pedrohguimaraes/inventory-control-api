module.exports = (sequelize, DataType) => {

    const Item_branch = sequelize.define('Item_branch', {
      net_price: DataType.DOUBLE,
      gross_price: DataType.DOUBLE,
      discount: DataType.STRING(255),
      cost_price: DataType.DOUBLE,
      branch_id: DataType.INTEGER,
      item_id: DataType.INTEGER
    }, {
      timestamps: false,
      tableName: 'item_branch'
    });

    return Item_branch;
}