const Sequelize = require("sequelize");
const ProjectDTO = {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey : true,
    },
    title: {
        type: Sequelize.STRING,
        maxLength: 50,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        maxLength: 500,
        allowNull: false,
    },
}

module.exports = ProjectDTO