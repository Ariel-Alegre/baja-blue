const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ReservateAirportToHotel = sequelize.define('ReservateAirportToHotel', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },

    comment: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    currency: {
      type: DataTypes.STRING,
    },

    departureDate: {
      type: DataTypes.STRING,
    },
    departureTime: {
      type: DataTypes.STRING,
    },
    from: {
      type: DataTypes.STRING,
    },
    isReturn: {
      type: DataTypes.BOOLEAN,
    },
  

    returnDate: {
      type: DataTypes.STRING,
    },
    returnTime: {
      type: DataTypes.STRING,
    },


    to: {
      type: DataTypes.STRING,
    },

    vehicles: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
    },
    comment: {
      type: DataTypes.STRING,
    },
    airline: {
      type: DataTypes.STRING,
    },

    
    flightNumber: {
      type: DataTypes.STRING,
    },

  
  },);

  return ReservateAirportToHotel;
};
