module.exports = function (sequelize, DataTypes) {
    var Dealership = sequelize.define("Dealer", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2 - 20]
            }
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2 - 20]
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2 - 20]
            }
        },
    });
    return Dealership;
}