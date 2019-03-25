module.exports = (sequelize, DataType) => {

    const Movement_type = sequelize.define('Movement_type', {
      name: DataType.STRING(45),
    }, {
      timestamps: false,
      tableName: 'movement_type'
    });

    return Movement_type;
}