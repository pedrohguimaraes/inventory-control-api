module.exports = (sequelize, DataType) => {

    const Movement = sequelize.define('Movement', {
      date: DataType.DATE,
      user_id: DataType.INTEGER,
      movement_type_id: DataType.INTEGER,
      address_origin_id: DataType.INTEGER,
      address_destiny_id: DataType.INTEGER
    }, {
      timestamps: false,
      tableName: 'movement'
    });

    return Movement;
}