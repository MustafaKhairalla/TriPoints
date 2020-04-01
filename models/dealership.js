module.exports = function (sequelize, DataTypes) {
    var Dealers = sequelize.define("Dealers", {
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
                len: [2 - 225]
            }
        },
    }, { timestamps: false });
    return Dealers;
}