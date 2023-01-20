const Sequelize = require('sequelize');
const UserDTO = require("../models/user");
const ProjectDTO = require("../models/project");
const TaskDTO = require("../models/task");


// const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/postgres');
const sequelize = new Sequelize("test", "postgres","postgres",{
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
});

//  database: 'loizenaidb',
//   username: 'postgres',
//   password: '123',
//   host: 'localhost',
//   dialect: 'postgres',
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
const initSequalize =  function () {
        sequelize.sync({force: true}).then(() => {
            console.log('Drop and Resync with { force: true }');
        }).catch((e) => {
            console.log(e)
        });

}

const Users = sequelize.define("Users", UserDTO);

const Project = sequelize.define("Project", ProjectDTO);

const Task = sequelize.define("Task", TaskDTO);

Users.hasMany(Task ,{
    foreignKey : {
        name: "author",
        as: "user.id"
    },
    as:"author"
});
Users.hasMany(Task ,{
    foreignKey : {
        name: "assigner",
        as: Users.id
    },
    as:"assigner"
});
// Users.belongsTo(Task,)


const addUser = function (doc) {
    Users.create(doc.User).then((document)=>{
        const task = doc.Task;
        task.author = document.id;
        Task.create(task);
    })
}


// module.exports.sequelize = sequelize
module.exports.addUser = addUser
module.exports.initSequalize = initSequalize
