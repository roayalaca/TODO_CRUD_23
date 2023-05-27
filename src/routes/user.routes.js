const { Router } = require('express');
const { createUser } = require("../controllers/users.controllers");
const { createUserValidator } = require("../validators/users.validators") ;

const router = Router();

router.post("/users", createUserValidator, createUser );

module.exports = router;