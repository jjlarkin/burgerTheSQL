module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        name: DataTypes.STRING,
        isEaten: DataTypes.BOOLEAN
    });
    return Burger;
};
