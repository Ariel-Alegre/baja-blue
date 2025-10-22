const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Review = sequelize.define(
    'Review',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      
      avatar: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false, // Validación para que el campo sea obligatorio
      },
      comment: {
        type: DataTypes.STRING(1000),
        allowNull: false, // Validación para que el campo sea obligatorio
      },
      rating: {
        type: DataTypes.INTEGER, // Cambiado a INTEGER para representar números
        allowNull: false,
        validate: {
          min: 1, // Validación para asegurarse de que sea entre 1 y 5
          max: 5,
        },
      },
      date: {
        type: DataTypes.DATE, // Cambiado de STRING a DATE
        allowNull: false,
        defaultValue: DataTypes.NOW, // Fecha actual por defecto
      },
    },
    {
      timestamps: false, // Desactiva createdAt y updatedAt
    }
  );

  return Review;
};
