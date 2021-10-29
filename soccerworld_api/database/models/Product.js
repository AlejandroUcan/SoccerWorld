module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Producto", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    equipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    liga: {
        type: DataTypes.STRING,
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    temporada: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: false
    },
  }, 
  {
    tableName: "products",
    timestamps: false,
  });

  return Product;
}
                
