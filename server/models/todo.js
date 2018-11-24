
export default (sequelize, DataTypes) => {
  const Todo = sequelize.define(
    'Todo',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    // eslint-disable-next-line comma-dangle
    {}
  );
  // eslint-disable-next-line no-unused-vars
  Todo.associate = (models) => {
    // associations can be defined here
  };
  return Todo;
};
