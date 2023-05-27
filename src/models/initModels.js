const Users = require("./users.models") 
const Todos = require("./todos.models")
const Categories = require("./categories.models")

const initModels = () => {
    Users.hasMany(Todos, { foreignKey: "userId" });
    Todos.belongsTo(Users, { foreignKey: "userId" });
    Categories.hasMany(Todos, { foreignKey: "categoryId" });
    Todos.belongsTo(Categories, { foreignKey: "categoryId" });
};

 module.exports = initModels;