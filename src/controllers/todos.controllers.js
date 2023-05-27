const Todos = require("../models/todos.models")
const Categories = require("../models/categories.models")
const Users = require("../models/users.models")

const createToDo = async (req, res) => {
    try {
        const { title, description, completed, userId, categoryId} = req.body;

        await Todos.create({ title, description, completed, userId, categoryId });
        res.status(201).send();
    } catch (error) {
        res.status(400).json(error);
    }
}


const getToDo = async (req, res) => {
    try {
       const { userId } = req.params
       const toDos = await Todos.findAll({
        where: {userId},
        attributes: {
            exclude: ["userId", "categoryId"]
        },
        include: [
            {
                model: Categories,
                attributes: ["name"]
            },
            {
                model: Users,
                attributes: ["username"]
            }
        ]
       });
       res.json(toDos)
    } catch (error) {
        res.status(400).json(error);
    }
}

const updateToDo = async (req, res) => {
    try {
        const { id } = req.params;
        const { completed } = req.body;

        await Todos.update({ completed }, {
            where: {id}
        });
        res.status(204).send();
    } catch (error) {
        res.status(400).json(error);
    }
}


const deleteToDo = async (req, res) => {
    try {
        const { id } = req.params;

        await Todos.destroy({
            where: {id}
        });
        res.status(204).send();
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    createToDo,
    getToDo,
    updateToDo,
    deleteToDo
}