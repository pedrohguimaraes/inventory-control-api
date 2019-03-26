module.exports = (sequelize, DataType) => {

    const Adress_inventory = sequelize.define('Adress_inventory', {
      name: DataType.STRING(255),
      branch_id: DataType.INTEGER(),
      is_active: DataType.BOOLEAN()
    }, {
      timestamps: false,
      tableName: 'adress_inventory'
    });

    return Adress_inventory;
}