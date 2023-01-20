const Sequelize = require("sequelize");
const Project = require("./project");
const User = require("./user");
const ProjectDTO = require("./project");
const UserDTO = require("./user");
const TaskDTO = {
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
    // project:{
    //     type: Sequelize.INTEGER,
    //     references: "Project",
    //     referencesKey: "id"
    // },
    // author:{
    //     type: Sequelize.INTEGER,
    //     // references: "Users",
    //     // referencesKey: "id"
    // },
    // assigner:{
    //     type: Sequelize.INTEGER,
    //     references: "Users",
    //     referencesKey: "id"
    // },
    // created_at:{
    //     type:Sequelize.DATE,
    // },
    status:{
        type:Sequelize.ENUM("new","in_progress","done")
    },
    description: {
        type: Sequelize.STRING,
        maxLength: 500,
    },
}

module.exports = TaskDTO