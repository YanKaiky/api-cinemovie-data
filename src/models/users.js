module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('users', {
            firstName: {
                allowNull: false,
                type: DataTypes.STRING
            },
            lastName: {
                allowNull: false,
                type: DataTypes.STRING
            },
            email: {
                allowNull: false,
                type: DataTypes.STRING
            },
            password: {
                allowNull: false,
                type: DataTypes.STRING
            }
        }
    )

    return model;
}