const Sequelize = require('sequelize');

const UserDTO = {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey : true,
    },

    first_name: {
        type: Sequelize.STRING,
        maxLength: 50,
        allowNull: false,
    },
    last_name: {
        type: Sequelize.STRING,
        maxLength: 50,
        allowNull: false,
    },
    age: {
        type: Sequelize.INTEGER,
        min: 1,
        max: 100,
    },
    position: {
        type: Sequelize.ENUM("student","teacher"),
    },
    // created_at: {
    //     type: Sequelize.DATE
    // },
    username: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
    }
}

module.exports = UserDTO