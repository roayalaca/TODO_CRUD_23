const { Router } = require('express');
const { createToDo, getToDo, updateToDo, deleteToDo } = require("../controllers/todos.controllers");
const { toDoValidator } = require("../validators/todos.validators")


const router = Router();

router.post("/todos", toDoValidator, createToDo );
router.get("/todos/users/:userId", getToDo );
router.put("/todos/:id", updateToDo );
router.delete("/todos/delete/:id", deleteToDo );


module.exports = router;