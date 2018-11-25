
export default (sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    content: DataTypes.STRING,
    complete: DataTypes.BOOLEAN,
  }, {});
  // eslint-disable-next-line no-unused-vars
  TodoItem.associate = (models) => {
    // associations can be defined here
    TodoItem.belongsTo(models.Todo, {
      foreignKey: 'todoId',
      onDelete: 'CASCADE',
    });
  };
  return TodoItem;
};
