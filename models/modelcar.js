module.exports = function (sequelize, DataTypes) {
    var Lineups = sequelize.define("Lineups", {

        model: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2 - 20]
            }
        },
        starting_price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                len: [1 - 10]
            }
        },
        fuel_tank: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                len: [1 - 10]
            }
        },
        zero_60: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                len: [1 - 10]
            }
        },
        MPG: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                len: [1 - 10]
            }
        },
        cost_10k: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                len: [1 - 10]
            }
        },
        cost_20k: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                len: [1 - 10]
            }
        },
        cost_30k: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                len: [1 - 10]
            }
        },
        cost_40k: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                len: [1 - 10]
            }
        },
        cost_50k: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                len: [1 - 10]
            }
        },
        cost_60k: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                len: [1 - 10]
            }
        },
        total_cost: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1 - 10]
            }
        },
        image_link: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { timestamps: false });
    return Lineups;
};

