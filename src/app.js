const db = require("./utils/database");
const initModels = require("./models/initModels");
const express = require("express");
require("dotenv").config()
const Todos = require("./models/todos.models");
const Users = require("./models/users.models");
const Category = require("./models/categories.models");
const postRoutes = require("./routes/user.routes");
const todoRoute = require("./routes/todos.routes");


initModels();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8000;

db.sync()
    .then( () => {
        console.log("Base de datos sincronizada")
    })
    .catch( (error) => console.log(error) )

app.get("/", (req, res) => {
    res.send("Servidor trabajando");
});

app.use(postRoutes);
app.use(todoRoute);

// obtener un to do con su categoría y por el usuario que la creo
app.get("/todo/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todos.findByPk(id,{
            attributes: {
                exclude: ['userId', 'categoryId']   
            },
            include: [
                {
                    model: Users,
                    attributes: ['id', 'username']
                },
                {
                    model: Category,
                    attributes: ['id', 'name']
                },
        ],
        });
        res.json(todo);
    } catch (error) {
        res.status(400).json(error);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});