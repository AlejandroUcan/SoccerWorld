module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("Usuario", {
    id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
    },
    nombre: {
          type: DataTypes.STRING,
          allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    avatar: {
          type: DataTypes.STRING,
          allowNull: false
    },
  }, 
  {
      tableName: "users",
      timestamps: false,
  });
  
  return User;
}
                  
